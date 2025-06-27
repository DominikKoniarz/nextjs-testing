import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
});

test.describe("Metadata", () => {
    test("should have valid metadata", async ({ page }) => {
        const title = await page.title();
        const description = await page
            .locator('meta[name="description"]')
            .getAttribute("content");

        expect(title).toBe("Next.js testing");
        expect(description).toBe("Next.js testing");
    });
});
