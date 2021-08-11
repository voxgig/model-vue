import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


function makeVuetify() {
  return new Vuetify({
    theme: { disable: true }
  })
}


export {
  makeVuetify
}
