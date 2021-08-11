import Patrun from 'patrun'
import Jsonic from 'jsonic'

import './vxg.scss'


import VxgBasicAdmin from './components/BasicAdmin.vue'
import VxgBasicHead from './components/BasicHead.vue'
import VxgBasicFoot from './components/BasicFoot.vue'
import VxgBasicMain from './components/BasicMain.vue'
import VxgBasicSide from './components/BasicSide.vue'
import VxgBasicLed from './components/BasicLed.vue'

const config_defaults = {
}


const util = {

}


class Vxg {

  constructor(config) {
    this.match = {
      allow: new Patrun({gex:true})
    }
    this.cmp = {}
    this.config(config)
    this.util = util
  }
  
  config(custom_config) {
    // TODO: deep, validation
    Object.assign(this.config, config_defaults, custom_config||{})

    this.config.allow = this.config.allow || {}
    this.config.allow.modify = this.config.allow.modify || ((x)=>x)
    this.config.allow.match = this.config.allow.match || []
    
    for(let entry of this.config.allow.match) {
      if(entry.match) {
        this.match.allow.add(entry.match, {allow:true})
      }
    }
  }


  allow(match) {
    let mm = Jsonic(match)
    let ms = Object.keys(mm).map(x=>mm[x])
    let found = null

    for(let m of ms) {
      let pat = this.config.allow.modify({...m||{}})
      found = this.match.allow.find(pat)
      console.log('VXG allow',JSON.stringify(m),pat,found)
      if(found) { break }
    }

    return found ? !!found.allow : false
  }

  
  install(Vue, options) {
  
    var co = {
      VxgBasicAdmin,

      VxgBasicHead,
      VxgBasicFoot,
      VxgBasicMain,
      VxgBasicSide,

      VxgBasicLed,
    }
    
    Object.keys(co).forEach(name => {
      Vue.component(name, co[name])
      this.cmp[name] = co[name]
    })
    
    Vue.prototype.$vxg = this

    window.vxg = this

    console.log('VXG INSTALL', this)
  }
}


export default Vxg
