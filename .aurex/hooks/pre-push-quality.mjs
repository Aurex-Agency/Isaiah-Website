import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'

const raw = await readStdin()
let input
try {
  input = JSON.parse(raw || '{}')
} catch {
  process.exit(0)
}

const command = input?.tool_input?.command ?? ''
if (!/\bgit\s+push\b/.test(command)) process.exit(0)

const cwd = input.cwd || process.cwd()
const packagePath = path.join(cwd, 'package.json')
if (!fs.existsSync(packagePath)) process.exit(0)

let pkg
try {
  pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'))
} catch {
  deny('Aurex quality gate could not read package.json. Fix package.json before pushing.')
}

const scripts = pkg.scripts || {}
const manager = detectPackageManager(cwd)
const orderedChecks = ['typecheck', 'lint', 'test', 'build'].filter((name) => scripts[name])

if (orderedChecks.length === 0) process.exit(0)

const failures = []
for (const name of orderedChecks) {
  const result = runScript(manager, name, cwd)
  if (result.status !== 0) {
    failures.push({
      name,
      output: tail(`${result.stdout || ''}\n${result.stderr || ''}`, 5000),
    })
    break
  }
}

if (failures.length) {
  const failure = failures[0]
  deny(
    `Aurex pre-push quality gate failed at "${failure.name}". Fix the failure before pushing.\n\n${failure.output}`,
  )
}

process.exit(0)

function detectPackageManager(dir) {
  if (fs.existsSync(path.join(dir, 'pnpm-lock.yaml'))) return 'pnpm'
  if (fs.existsSync(path.join(dir, 'yarn.lock'))) return 'yarn'
  if (fs.existsSync(path.join(dir, 'bun.lockb')) || fs.existsSync(path.join(dir, 'bun.lock'))) return 'bun'
  return 'npm'
}

function runScript(manager, name, dir) {
  const args = manager === 'npm' ? ['run', name] : ['run', name]
  return spawnSync(manager, args, {
    cwd: dir,
    encoding: 'utf8',
    env: process.env,
    shell: process.platform === 'win32',
  })
}

function deny(reason) {
  process.stdout.write(
    JSON.stringify({
      hookSpecificOutput: {
        hookEventName: 'PreToolUse',
        permissionDecision: 'deny',
        permissionDecisionReason: reason,
      },
    }),
  )
  process.exit(0)
}

function tail(value, max) {
  if (value.length <= max) return value.trim()
  return `…${value.slice(-max).trim()}`
}

function readStdin() {
  return new Promise((resolve) => {
    let data = ''
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', (chunk) => (data += chunk))
    process.stdin.on('end', () => resolve(data))
    process.stdin.on('error', () => resolve(''))
  })
}
