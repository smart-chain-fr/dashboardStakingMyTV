import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueClipboard from 'vue-clipboard2'
import VueToast from 'vue-toast-notification';
import router from './router';
import Vuex from 'vuex';
import store from '@/store';
// Import any of available themes
import 'vue-toast-notification/dist/theme-default.css';
import '@/assets/scss/style.scss';
import VueTables from 'vue-tables-2';

Vue.config.productionTip = false
Vue.use(VueToast)
Vue.use(VueClipboard);
Vue.use(Vuex);
Vue.use(VueTables.ClientTable);

const vuex = new Vuex.Store({...store});

new Vue({
  vuetify,
  render: h => h(App),
  router,
  store: vuex
}).$mount('#app')

