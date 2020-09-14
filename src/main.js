import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import UUID from "vue-uuid";
import moment from 'vue-moment'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(moment)
Vue.use(UUID);
Vue.use(Buefy)
Vue.use(IconsPlugin)

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
