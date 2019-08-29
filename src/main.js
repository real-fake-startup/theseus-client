import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import BetterLayout from "@/layouts/BetterLayout.vue";
import PaperDashboard from "./plugins/paperDashboard";
import DashboardLayout from "@/layouts/dashboard/DashboardLayout.vue";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

Vue.component("better-layout", BetterLayout);
Vue.component("default-layout", DefaultLayout);
Vue.component("dashboard-layout", DashboardLayout);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
