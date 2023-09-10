// @ts-check
const { test, expect } = require("@playwright/test");

test("get started link", async ({ page }) => {
  await page.goto("http://localhost:3000/page.html");
  await expect(page.getByText("204")).toBeVisible();
  // await fetch('https://httpbin.org/status/203');
});
