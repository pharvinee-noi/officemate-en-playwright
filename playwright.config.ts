// playwright.config.ts

import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    // All requests we send go to this API endpoint.
    baseURL: 'https://www.officemate.co.th/en',
    screenshot: "on",
    trace: "retain-on-failure",
    headless: true
  },
  projects: [
    /* {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }, */
    /* {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    }, */
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
  ],
  testMatch: ["officemate_search.test.ts"],
  retries: 2,
  // report
  reporter: [["dot"], ["json", { outputFile: "test-results.json" }], ['experimental-allure-playwright']],
  
};
export default config;