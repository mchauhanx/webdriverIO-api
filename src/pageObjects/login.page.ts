import Page from './page';
import data from '../resources/login.json'
import axios from 'axios'

class Login extends Page {

  async testPOC() {
    console.log(data.login)
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    axios.post('http://localhost:3634/out-of-band/receive-invitation?auto_accept=true', data.login, {
      headers: {
          'Content-Type': 'application/json',
      },      
  })
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
  }
}
export default new Login();
