import Page from "./page";
import data from "../resources/login.json";
import axios from "axios";

class Login extends Page {
  async getInvitation() {
    await browser.cdp("Network", "enable");
    browser.on("Network.webSocketHandshakeResponseReceived", (params) => {
      //console.log(JSON.stringify(params.response))
      let response = JSON.stringify(params.response)
        .split("invitation_message_id=")
        .pop();
      // console.log(`"LOADED"${response}`)
      this.invitation = response.split("HTTP")[0].split(" ").join("");
      console.log(`INVITATION ID----> ${this.invitation}`);
    });
  }

  async scanQR() {
    console.log(this.invitation);
    await axios
      .post(
        "http://localhost:3634/out-of-band/receive-invitation?auto_accept=true",
        {
          "@type":
            "did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/out-of-band/1.0/invitation",
          "@id": this.invitation,
          handshake_protocols: [
            "did:sov:BzCbsNYhMrjHiqZDTUASHg;spec/connections/1.0",
          ],
          services: ["did:sov:WaBvV4LTEf9YJSq829THfV"],
          label: "Oliu",
        }
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });
  }
}
export default new Login();
