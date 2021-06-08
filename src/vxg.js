import './vxg.scss'


import VxgBasicAdmin from './components/BasicAdmin.vue'
import VxgBasicHead from './components/BasicHead.vue'
import VxgBasicFoot from './components/BasicFoot.vue'
import VxgBasicMain from './components/BasicMain.vue'
import VxgBasicSide from './components/BasicSide.vue'


const config_defaults = {
}


class Vxg {

  constructor(config) {
    this.cmp = {}
    this.config(config)
  }
  
  config(custom_config) {
    // TODO: deep, validation
    Object.assign(this.config, config_defaults, custom_config||{})
  }

  install(Vue, options) {
  
    var co = {
      VxgBasicAdmin,
      VxgBasicHead,
      VxgBasicFoot,
      VxgBasicMain,
      VxgBasicSide,
    }
    
    Object.keys(co).forEach(name => {
      Vue.component(name, co[name])
      this.cmp[name] = co[name]
    })
    
    Vue.prototype.$vxg = this
  }
}


export default Vxg
