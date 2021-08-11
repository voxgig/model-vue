import Vue from 'vue'
import Account from './Account.vue'

import { makeVuetify } from './vuetify/vuetify'
import { makeRouter } from './router/router'
import { makeStore } from './store/store'


Vue.config.productionTip = false


const store = makeStore()
const router = makeRouter({routes:[]})
const vuetify = makeVuetify()


const root = new Vue({
  router,
  store,
  render: h => h(Account)
}).$mount('#app')


window.app = {
  account: root.$children[0],
  root,
}
