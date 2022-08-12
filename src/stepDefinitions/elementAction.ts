import { Then } from '@wdio/cucumber-framework';

require('dotenv').config();

Then(/^the user enters text "([^"]*)?" in textbox with placeholder (.*)$/, async (text, selector) => {
  await $(`[placeholder = ${selector}]`).setValue(text);
});

Then(/^the user gets text from the textbox with placeholder (.*)$/, async (selector) => {
  await $(`//input[@placeholder = ${selector}]`).getValue();
});

Then(/^the user clicks on the button with html tag "([^"]*)?" as (.*)$/, async (htmlTag, selector) => {
  await $(`//button[@${htmlTag} = ${selector}]`).click();
});

Then(/^the user clicks on the checkbox with html tag "([^"]*)?" as (.*)$/, async (htmlTag, selector) => {
  await $(`//input[@${htmlTag} = ${selector}]`).click();
});

Then(/^the user clicks on the (.*) button at index "([^"]*)?"$/, async (selector, index) => {
  await $(`(//span[text() = ${selector}])[${Number(index)}]`).click();
});

Then(/^the user double clicks on the (.*) button$/, async (selector) => {
  await (await $(`//span[text() = ${selector}]`)).doubleClick;
});

Then(/^the user clicks on the link "([^"]*)?"$/, async (selector) => {
  await $(`=${selector}`).click();
});

Then(/^the user clicks on the link (.*) at index "([^"]*)?"$/, async (selector, index) => {
  await $(`(//a[text() = ${selector}])[${Number(index)}]`).click();
});

Then(/^in iframe "([^"]*)?" the user enters text "([^"]*)?" in textbox with placeholder (.*)$/, async (index, text, selector) => {
  await browser.switchToFrame(+index);
  await $(`[placeholder = ${selector}]`).setValue(text);
  browser.switchToFrame(null);
});
