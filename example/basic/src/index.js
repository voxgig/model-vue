import Vue from 'vue'
import Public from './Public.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(Public)
}).$mount('#app')
