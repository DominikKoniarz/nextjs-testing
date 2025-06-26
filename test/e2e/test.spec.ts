import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
});

test.describe("Dialog", () => {
    test("open button exists", async ({ page }) => {
        const openButton = page.getByTestId("dialog-trigger");

        // Check if the button with id "dialog" exists
        expect(openButton).toBeDefined();
    });

    test("dialog opens on button click", async ({ page }) => {
        // Click the button to open the dialog
        await page.getByTestId("dialog-trigger").click();

        // Check if the dialog content is visible
        const dialogContent = page.getByRole("dialog");

        // Assert that the dialog content is visible
        await expect(dialogContent).toBeVisible();
    });
});

test.describe("Link", () => {
    test("redirects to 404 page", async ({ page }) => {
        // Click the link to redirect to 404
        await page.getByTestId("redirect-link").click();

        // Assert that the URL is now the 404 page
        await expect(page).toHaveURL(/.*404/);
    });
});
