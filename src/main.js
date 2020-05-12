import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import store from './store'

Vue.config.productionTip = false;



Vue.prototype.$http = Axios;
//axios.defaults.baseURL = 'https://vuejs-stocktrader-afff0.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' +  value.toLocaleString();
});

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
