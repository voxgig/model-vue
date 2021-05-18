import './vxg.scss'


import VxgBasicAdmin from './components/BasicAdmin.vue'
import VxgBasicHead from './components/BasicHead.vue'
import VxgBasicFoot from './components/BasicFoot.vue'
import VxgBasicMain from './components/BasicMain.vue'
import VxgBasicSide from './components/BasicSide.vue'


const Vxg = {
  // names of components found and loaded
  found: []
}

Vxg.install = function(Vue, options) {
  

  
  var co = {

    VxgBasicAdmin,
    VxgBasicHead,
    VxgBasicFoot,
    VxgBasicMain,
    VxgBasicSide,
  }

  // These components are automatically added as global components.
  Object.keys(co).forEach(name => {
    Vue.component(name, co[name])
    Vxg.found.push(name)
  })
}


export default Vxg
