import Vue from 'vue'

import './mock'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import requestList from './request'
import './permission'
import './icons'
import './component'
import filters from './filters'

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$request = requestList

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
