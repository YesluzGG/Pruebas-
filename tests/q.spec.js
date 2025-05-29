import { test, expect } from "@playwright/test";

test("has title # 1", { tag: "@report" }, async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
test("has title # 2", { tag: "@two" }, async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.describe("test describe", { tag: "@report" }, () => {
  test("has title # 3", { tag: "@report" }, async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  test("has title # 4", { tag: "@two" }, async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
});

test("has title # 5", { tag: "@one" }, async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});
test(
  "has title # 6",
  {
    annotation: {
      type: "doc",
      description: "https://playwright.dev/",
    },
  },
  async ({ page, browser, browserName }) => {
    // const version = browser.version();
    await page.goto("https://playwright.dev/");
    test.info().annotations.push({
      type: "browser version",
      description: browser.version() + " " + browserName,
    });

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  }
);
