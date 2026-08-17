import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

const routes = (process.env.AUREX_TEST_ROUTES || '/')
  .split(',')
  .map((route) => route.trim())
  .filter(Boolean)

for (const route of routes) {
  test(`${route} has no automatically detectable WCAG A/AA violations`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'domcontentloaded' })

    const results = await new AxeBuilder({ page })
      .withTags([
        'wcag2a',
        'wcag2aa',
        'wcag21a',
        'wcag21aa',
        'wcag22aa',
      ])
      .analyze()

    expect(results.violations).toEqual([])
  })
}

// Automated axe checks cover only a subset of accessibility issues.
// Aurex still requires manual keyboard, focus, form, motion, and interaction review.
