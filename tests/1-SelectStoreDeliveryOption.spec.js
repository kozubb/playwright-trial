import { test, expect } from "@playwright/test";

test("Select store in delivery option", async ({ page }) => {
  await page.goto("https://qa7-www.solutions4delivery.com");
  await page.locator(".s4d-close-cookie").click();
  await page
    .getByTestId("top-locator-selected-location-dropdown-title")
    .first()
    .click();
  await page
    .locator('[data-testid="search-input-location-search"]')
    .fill("Adelaide Road 36");
  await page
    .locator('[data-testid="list-item-item-0-main-text"]')
    .click({ force: true });
  await page.getByTestId("drawer-footer-primary-btn").click();
  await page.waitForTimeout(2000);
  await page.getByTestId("drawer-footer-primary-btn").click();
  await expect(
    page.getByTestId("top-locator-selected-location-dropdown-title").first()
  ).toHaveText("Adelaide Road 36");
});
