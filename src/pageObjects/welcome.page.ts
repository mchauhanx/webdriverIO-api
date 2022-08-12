import { faker } from '@faker-js/faker';
import Page from './page';

class Welcome extends Page {

 firstName = faker.name.firstName();
 lastName =faker.name.lastName();
 organization = faker.name.jobType()
 email = `${this.firstName}@testmail.com`

  async enterPersonalDetails() {
  await $("[placeholder = 'First Name']").setValue(this.firstName);
  await $("[placeholder = 'Last Name']").setValue(this.lastName);
  await $("[placeholder = 'Organization Name']").setValue(this.organization);
  await $("[placeholder = 'Email']").setValue(this.email);
   console.log("DETAILS"+ this.firstName, this.lastName, this.organization, this.email)
  }
}
export default new Welcome();
