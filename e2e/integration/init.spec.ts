import { chromium, ChromiumBrowser, Page } from 'playwright';

import setupEnv from '../utils/env';

let browser: ChromiumBrowser;
let page: Page;
const env = setupEnv();

beforeAll(async () => {
  browser = await chromium.launch();
});
afterAll(async () => {
  await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

it('should work', async () => {
  await page.goto(env.REACT_APP_BASE_URL);
  expect(await page.title()).toBe('Task Tracking App');
});
