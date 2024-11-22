# Playwright Automation Suite

This project is a test automation suite for a web application using Playwright. It utilizes the Page Object Model (POM) design pattern, custom test configurations, and API-based authentication to perform end-to-end testing.


## Features

- Automated login via API and web interface
- Product selection and checkout flow
- Dynamic test creation using test data from JSON files
- Page Object Model for better maintainability
- Support for multiple browsers (Chromium, WebKit)


## Tech Stack

- **Playwright**: For browser automation.
- **TypeScript**: Ensures type safety and better code readability.
- **Node.js**: Runtime environment.
- **JSON**: For managing test data.

## Requirements

- Node.js (version 14 or higher)
- NPM (Node Package Manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/login_automation.git
   cd login_automation
   
Install the dependencies:
npm install

Key Scripts
LoginPage:
Navigates to the login page and performs login.
POManager:
Manages and provides access to page objects.
API Login:
Logs in using the application API and injects the token for session management.



2. Usage
To run the tests, use the following command:
npx playwright test      // To run all tests
npx playwright test tests/File_Name      // To run specific file i.e Login.spec


Running Tests in Different Browsers
You can run tests in different browsers by specifying the project name in the command:

npx playwright test --project=Chromium
npx playwright test --project=WebKit


Configuration
playwright.config.ts:
Set browser, timeout, and reporting preferences.
placeorderTestData.json:
JSON file containing test data for dynamic test creation.


Contact
For questions or support, feel free to reach out:

Email: rhythmgautam07@gmail.com
LinkedIn: https://linkedin.com/in/rhythm-gautam
