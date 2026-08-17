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

const filePath = input?.tool_input?.file_path
if (!filePath) process.exit(0)

const cwd = input.cwd || process.cwd()
const targetPath = path.isAbsolute(filePath) ? filePath : path.resolve(cwd, filePath)

const supported = new Set([
  '.js', '.jsx', '.ts', '.tsx', '.mjs', '.cjs',
  '.json', '.css', '.scss', '.md', '.mdx', '.html',
  '.yml', '.yaml',
])

if (!supported.has(path.extname(targetPath).toLowerCase())) process.exit(0)
if (!fs.existsSync(targetPath)) process.exit(0)

const executable = process.platform === 'win32' ? 'prettier.cmd' : 'prettier'
const prettier = path.join(cwd, 'node_modules', '.bin', executable)

// Never invoke npx here. Hooks should not unexpectedly download packages.
if (!fs.existsSync(prettier)) process.exit(0)

const result = spawnSync(prettier, ['--write', targetPath], {
  cwd,
  encoding: 'utf8',
  env: process.env,
  shell: false,
})

if (result.status !== 0) {
  const message = (result.stderr || result.stdout || 'Unknown Prettier error').trim()
  process.stderr.write(`Aurex formatter hook could not format ${targetPath}: ${message}\n`)
  process.exit(1)
}

process.exit(0)

function readStdin() {
  return new Promise((resolve) => {
    let data = ''
    process.stdin.setEncoding('utf8')
    process.stdin.on('data', (chunk) => (data += chunk))
    process.stdin.on('end', () => resolve(data))
    process.stdin.on('error', () => resolve(''))
  })
}
