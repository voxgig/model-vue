import Vue from 'vue'
import Account from './Account.vue'

import { makeVuetify } from './vuetify/vuetify'
import { makeRouter } from './router/router'
import { makeStore } from './store/store'

import model from '../model/model.json'


Vue.config.productionTip = false
Vue.config.devtools = true


const store = makeStore()
const router = makeRouter({routes:[]})
const vuetify = makeVuetify()


Vue.prototype.$vxg = {
  model,
}

const root = new Vue({
  router,
  store,
  render: h => h(Account)
}).$mount('#app')


window.vxg = {
  account: root.$children[0],
  root,
  model,
}
