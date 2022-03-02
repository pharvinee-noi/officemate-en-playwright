# officemate-en-playwright
Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.

## Manually​ install
### Add dependency and install browsers.
```Shell
$ npm i -D @playwright/test
```
### Install supported browsers
```Shell
$ npm install npx
```
```Shell
$ npx playwright install
```
### Install Generate HTML Report (If can't Executing task)
```Shell
npm i -D allure-commandline
npm i -D experimental-allure-playwright
```
### Executing task
```Shell
$ npm run run_playwright_test
```