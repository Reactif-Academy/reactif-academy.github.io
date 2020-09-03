import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// import library
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import myRouter from "./router";
const router = new VueRouter({
  routes: myRouter
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
