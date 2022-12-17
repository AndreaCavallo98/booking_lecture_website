<template>
  <app-header></app-header>

  <router-view></router-view>

  <app-footer></app-footer>
</template>

<script>
import AppHeader from "@/components/Header.vue";
import AppFooter from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};

/*


[TO DO]
- Autenticazione
- Finire homepage
- Finire pagina teachers
- Dettaglio teacher
- Calendario prenotazione
- Mie prenotazioni + recensione
- Profilo
- Admin

[ADDITIONAL FUNCTIONS]
- pwa
- internalization

*/
</script>
