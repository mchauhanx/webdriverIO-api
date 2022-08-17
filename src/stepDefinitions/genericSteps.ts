import { Given, Then } from '@wdio/cucumber-framework';
import cdp from '@wdio/devtools-service' 
import Login from '../pageObjects/login.page'

require('dotenv').config();

Given(/^the user launches the url$/, async () => {
  Login.getInvitation()
  await browser.url(process.env.APP_URL);
  await browser.maximizeWindow();
});

Given(/^the user navigates to the (.*)$/, async (url) => {
  await browser.navigateTo(url);
  await browser.maximizeWindow();
});

Then(/^the user click on (.*)$/, async (selector) => {
  await $(`//*[text() = ${selector}]`).click();
  await Login.getInvitation()
});

Then(/^the user waits for "([^"]*)?" seconds$/, async (seconds) => {
  await browser.pause(seconds * 1000);
});

Then(/^the user presses keyboard key "([^"]*)?"$/, async (key) => {
  await browser.keys(key);
});

Then(/^the user enters text "([^"]*)?" in the textbox (.*)$/, async (text, selector) => {
  await $(`//label[contains(text(), ${selector})]/following::input[1]`).setValue(text);
});
