import { Then } from '@wdio/cucumber-framework'

import Welcome from '../pageObjects/welcome.page'
import Login from '../pageObjects/login.page'

require('dotenv').config()

Then(/^the user enter details on Welcome page$/, async () => {
  Welcome.enterPersonalDetails()
});

Then(/^the user scans the QR code$/, async() => {
  Login.scanQR()
});
