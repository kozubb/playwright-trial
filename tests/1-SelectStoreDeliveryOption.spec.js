import { test, expect } from "@playwright/test";

test("Select store in delivery option", async ({ page }) => {
  const endpoint = "https://qa7-www.solutions4delivery.com";
  const addressStreet = "Adelaide Road 36";
  const addressCity = "D02 PX29 Dublin 2";
  const infoBannertext =
    "Just a final check! Please, confirm that your location details are correct.";
  const locationTitle = "Location details";

  await page.goto(endpoint);
  await page.locator(".s4d-close-cookie").click();
  await page
    .getByTestId("top-locator-selected-location-dropdown-title")
    .first()
    .click();
  await expect(page.getByTestId("drawer-content")).toBeVisible();
  await page
    .locator('[data-testid="search-input-location-search"]')
    .fill(addressStreet);
  await page
    .locator('[data-testid="list-item-item-0-main-text"]')
    .click({ force: true });
  await expect(page.getByTestId("drawer-header-title")).toHaveText(
    locationTitle
  );
  await expect(page.getByTestId("address-time-tile--text")).toHaveText(
    addressStreet
  );
  await expect(page.getByTestId("address-time-tile--subtitle")).toHaveText(
    addressCity
  );
  await page.getByTestId("drawer-footer-primary-btn").click();
  await expect(page.getByTestId("drawer-header-title")).toHaveText(
    locationTitle
  );
  await expect(page.getByTestId("address-time-tile--text")).toHaveText(
    addressStreet
  );
  await expect(page.getByTestId("address-time-tile--subtitle")).toHaveText(
    addressCity
  );
  await expect(page.getByTestId("info-banner--text")).toHaveText(
    infoBannertext
  );
  await page.getByTestId("drawer-footer-primary-btn").click();
  await expect(
    page.getByTestId("top-locator-selected-location-dropdown-title").first()
  ).toHaveText(addressStreet);
});
