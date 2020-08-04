import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import "@/assets/scss/main.scss";
// Plugin
import vuetify from '@/plugins/vuetify'
import "./plugins/animate.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");