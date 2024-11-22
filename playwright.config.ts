// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries: 1,

  /* Maximum time one test can run for. */
  timeout: 60 * 1000,
  expect: {
    timeout: 5000
  },

  reporter: 'html',

  projects: [
    {
      name: 'Chromium',
      use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        trace: 'on',
      },
    },
    {
      name: 'WebKit',
      use: {
        browserName: 'webkit',
        headless: true,
        screenshot: 'on',
        trace: 'on',
      },
    
    }
    
  ],
};

module.exports = config;
