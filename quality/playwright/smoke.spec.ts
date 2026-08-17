import { expect, test } from '@playwright/test'

const routes = (process.env.AUREX_TEST_ROUTES || '/')
  .split(',')
  .map((route) => route.trim())
  .filter(Boolean)

for (const route of routes) {
  test(`${route} renders without material browser errors`, async ({ page }) => {
    const errors: string[] = []

    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })

    page.on('pageerror', (error) => {
      errors.push(error.message)
    })

    const response = await page.goto(route, { waitUntil: 'domcontentloaded' })

    expect(response, `No response received for ${route}`).not.toBeNull()
    expect(response?.ok(), `Non-success response for ${route}`).toBeTruthy()

    await expect(page.locator('main')).toBeVisible()

    const filtered = errors.filter((message) => !isAllowedConsoleError(message))
    expect(filtered, `Browser errors on ${route}`).toEqual([])
  })
}

function isAllowedConsoleError(_message: string) {
  // Add narrowly-scoped known third-party exceptions only when they are understood.
  // Do not turn this into a blanket console-error ignore list.
  return false
}
