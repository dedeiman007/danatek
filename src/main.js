import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import * as moment from "moment/moment";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap/dist/js/bootstrap.js"
import './assets/scss/app.scss'
import Notifications from 'vue-notification'
import FrontLayout from './layouts/FrontLayout.vue';
import LoginLayout from './layouts/LoginLayout.vue';
import AdminLayout from './layouts/AdminLayout.vue';
import DefaultLayout from './layouts/DefaultLayout.vue';


Vue.component('front-layout', FrontLayout);
Vue.component('login-layout', LoginLayout);
Vue.component('admin-layout', AdminLayout);
Vue.component('default-layout', DefaultLayout);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Notifications)

Vue.config.productionTip = false

Vue.mixin({

  methods: {
    date(date, format){
        return moment(date).format(format)
    },
  }

})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
