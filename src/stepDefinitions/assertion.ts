import { Then } from '@wdio/cucumber-framework';

require('dotenv').config();

Then(/^the user validates if (.*) text is visible$/, async (selector) => {
  await expect($(`//*[contains(text(), ${selector})]`)).toBeDisplayed();
});

Then(/^the user validates if (.*) checkbox is not selected$/, async (selector) => {
  await expect($(`//*[contains(text(), ${selector})]/preceding::input[@type='checkbox']`)).not.toBeSelected();
});

Then(/^the user validates if text for (.*) contains "([^"]*)?"$/, async (selector, text) => {
  await expect($(`//*[contains(text(), ${selector})]`)).toHaveTextContaining(text);
});

Then(/^the user validates if (.*) checkbox is selected$/, async (selector) => {
  await expect($(`//*[contains(text(), ${selector})]/preceding::input[@type='checkbox']`)).toBeChecked();
});
