import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMoment from 'vue-moment'
import highcharts from 'highcharts-vue'
import { router } from '@/router'
import { store } from '@/store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import '@/assets/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App.vue'

Vue.use(ElementUI, { locale })
Vue.use(VueAxios, axios)
Vue.use(VueMoment)
Vue.use(highcharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
