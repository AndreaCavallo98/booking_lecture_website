<template>
  <app-header></app-header>

  <router-view></router-view>

  <app-footer></app-footer>
  <app-auth-modal></app-auth-modal>
</template>

<script>
import { mapWritableState } from "pinia";
import useUserStore from "@/stores/user";

import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";
import AppAuthModal from "@/components/AuthModal.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppAuthModal,
  },
  computed: {
    ...mapWritableState(useUserStore, [
      "userLoggedIn",
      "userId",
      "userJwtToken",
      "userRole",
      "userName",
      "userImageName",
    ]),
  },
  created() {
    if (localStorage.getItem("token") != null) {
      this.userLoggedIn = true;
      this.userId = localStorage.getItem("userId");
      this.userJwtToken = localStorage.getItem("token");
      this.userRole = localStorage.getItem("userRole");
      this.userName = localStorage.getItem("userName");
      this.userImageName = localStorage.getItem("userImageName");
    } else {
      console.log("NO SAVED");
    }
  },
};

/*


[TO DO]
- Autenticazione (pulizia, errori e expired token)
- Finire pagina teachers (ordina e fix)
- perche calendario mi da errore: "Uncaught (in promise) TypeError: Cannot read properties of null"
- Admin OGGI

[ADDITIONAL FUNCTIONS]
- pwa [2]
- internalization [1]
- dark mode [3]

[FIX]
- slider max hourly rate
- teacher/id sbagliato non riporta correttamente alla homepage
- click on slick slider stop propagation
- meta field in route
- se entro in pagina e non sono loggato butta fuori
- se uno recensisce da telefono e poi non refresha da sito dove ha abilitato ancora review inconsistenze (check nel backend)

*/
</script>
