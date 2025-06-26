import test, { expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
});

test.describe("Link", () => {
    test("redirects to 404 page", async ({ page }) => {
        // Click the link to redirect to 404
        await page.getByTestId("redirect-link").click();

        // Assert that the URL is now the 404 page
        await expect(page).toHaveURL(/.*404/);
    });
});
