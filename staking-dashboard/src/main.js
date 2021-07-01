import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueClipboard from 'vue-clipboard2'
import VueToast from 'vue-toast-notification';
// Import any of available themes
import 'vue-toast-notification/dist/theme-default.css';

Vue.config.productionTip = false
Vue.use(VueToast)
Vue.use(VueClipboard)


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

