/**
 * Open the page
 * Click at Get started
 * Mouse hover the language dropdown
 * Click at Java
 * Check the URL
 * Check the text "Installing Playwright" is not being displayed
 * Check the text below is displayed
 * 
 * Playwright is distributed as a set of Maven modules.
 * 
 */

import { expect, test } from "@playwright/test";
import exp from "constants";

test.only ('check Java page', async ({ page }) => {

    await page.goto('https://playwright.dev/');
    await page.getByRole('link', {name: 'Get Started'}).click();
    await page.getByRole('button', {name: 'Node.js'}).hover();
    await page.getByText('Java', {exact: true}).click();

    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro');
    await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();

    const javaDescription = 'Playwright is distributed as a set of Maven modules.';
    await expect(page.getByText(javaDescription)).toBeVisible();


});
