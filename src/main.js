import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";

// => import global assets
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.bundle.min.js";
//import "./assets/css/aos.css";
//import "./assets/js/aos.js";
import "./assets/fontawesome/css/fontawesome.min.css";
import "./assets/fontawesome/css/all.min.css";
import "./assets/css/feather.css";
import "./assets/js/feather.min.js";

// => import template assest
//import "moment";
//import "./assets/js/daterangepicker/daterangepicker.css";
import "./assets/style.css";
//import "./assets/js/daterangepicker/daterangepicker.js";
//import "./assets/js/fancybox/jquery.fancybox.min.css";
//import "./assets/js/fancybox/jquery.fancybox.min.js";
//import "./assets/js/swiper/css/swiper.min.css";
//import "./assets/css/intlTelInput.css";
//import "./assets/css/demo.css";
//import "./assets/js/intlTelInput.js";
//import "./assets/js/intlTelInput.min.js";
//import "./assets/js/utils.js";
import "./assets/js/slick.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);

app.mount("#app");
