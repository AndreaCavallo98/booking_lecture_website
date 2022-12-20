import { defineStore } from "pinia";
import axios from "axios";

export default defineStore("user", {
  state: () => ({
    userLoggedIn: false,
    userId: -1,
    userJwtToken: "",
    userRole: "",
    userName: "",
    userImageName: "",
  }),
  actions: {
    async login(values) {
      let clientResponse = "";
      //await auth.signInWithEmailAndPassword(values.email, values.password);
      await axios
        .post(
          "http://localhost:8080/Prenotazioni0_war_exploded/servlet-auth?action=login",
          {
            username: values.username,
            password: values.password,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          if (response.status == 200) {
            if (response.data.authError == "") {
              this.userLoggedIn = true;
              this.userId = response.data.authId;
              this.userJwtToken = response.data.jwtToken;
              this.userRole = response.data.authRole;
              this.userName = response.data.authUsername;
              this.userImageName = response.data.authImageName;
              localStorage.setItem("userId", this.userId);
              localStorage.setItem("token", this.userJwtToken);
              localStorage.setItem("userRole", this.userRole);
              localStorage.setItem("userName", this.userName);
              localStorage.setItem("userImageName", this.userImageName);
            } else {
              clientResponse = "Credentials are incorrect!";
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });

      return clientResponse;
    },
    async logout() {
      localStorage.clear();

      this.userLoggedIn = false;
      this.userId = -1;
      this.userJwtToken = "";
      this.userRole = "";
      this.userName = "";
      this.userImageName = "";
    },
  },
});
