<template>
  <v-navigation-drawer
    app
    class="vxg-side"
    :style="drawerStyle"
    >
    <v-sheet style="display: flex; flex-direction: column; height:100%;">
      <div style="display: flex; justify-content: space-between;">
        <div style="" v-html="logo"></div>

        <v-icon
          large
          @click="closeDrawer"
          style="width:48px;"
          dark
          >mdi-chevron-left</v-icon>
      </div>


      <v-btn-toggle style="background-color: rgb(var(--vxg-cb1)) !important;"
        v-model="menuViewIndex"
        mandatory
        >
        <v-btn v-for="menuView in menuViewList" class="pa-4 text-center secondary text-no-wrap rounded-sm btn-style" color= "white" :key="menuView.name" outlined 
          :to="'/'+menuView.name"
>
          {{ menuView.btnTitle }}
        </v-btn>
      </v-btn-toggle>

      <!--
      <h1 v-if="menuShowTitle">{{ menuView.title }} </h1>
      -->  
      <template
	v-if="'custom' === menuView.mode"
      >
        <v-select
          :items="assets"
          :label="roomName"
          dense
          outlined
	  @click="loadAssets"
        ></v-select>
      </template>

      <template
        v-if="'standard' === menuView.mode"
        v-for="item in menu">
        <component
          v-if="allow(item)"
          :is="'router-link'"
          :to="'/'+item.code"
          :key="item.code"
          :class="item.klass"
          style="flex-grow:1;"
          >
          <v-icon>mdi-{{ item.icon }}</v-icon> {{ item.title }}
        </component>
      </template>

      <component
        v-if="'custom' === menuView.mode"
        :is="menuView.cmp"
        :spec="menuView.view.spec"
        >
      </component>

      
      <div style="flex-grow:100;"></div>
      <v-divider></v-divider>

      <!-- p style="color:white;text-align:center;">[{{ $auth.user.attributes.profile }}]</p -->
      
      <a @click="action('support')" xhref="#/main/asset" class="vxg-router-link"><i aria-hidden="true" class="v-icon notranslate mdi mdi-help theme--light" ></i> Support </a>
      <a @click="action('signout')" xhref="#/main/asset" class="vxg-router-link"><i aria-hidden="true" class="v-icon notranslate mdi mdi-logout-variant theme--light" ></i> Sign out </a>
      
    </v-sheet>
  </v-navigation-drawer>
</template>

<style lang="scss">
nav.vxg-side {
    background-color: rgb(var(--vxg-cb1)) !important;

    .v-sheet {
        background-color: rgb(var(--vxg-cb1)) !important;
    }

    .v-divider {
        border-color: rgb(var(--vxg-ct2)) !important;
        margin: 16px 8px;
    }
}
.btn-style{
	background-color: rgb(0, 0, 26) !important;
	width: 130px;
}
a.vxg-router-link {
    display: block;
    margin: 0px 8px;
    padding: 16px 8px;
    text-decoration: none !important;
    color: rgb(var(--vxg-ct1)) !important;
    border-radius: 8px;
    
    .v-icon {
        color: rgb(var(--vxg-ct2)) !important;
    }
    
    &.router-link-active {
        background-color: rgb(var(--vxg-cb2)) !important;
        color: rgb(var(--vxg-ct1)) !important;
        .v-icon {
            color: rgb(var(--vxg-ct1)) !important;
        }
    }

}
.vxg-side-open {
    width: 48px;
    height: 48px;
}
</style>


<script>

export default {

  props: {
    spec: {
      type: Object,
      required: true,
    },
    logo: String,
  },
  
  data () {
    // let menuViewList = [
    //   {
    //     title: 'One View',
    //     btnTitle: 'One View',
    //     mode: 'custom',
    //   },
    //   {
    //     title: 'Management View',
    //     btnTitle: 'Mgmt View',
    //     mode: 'standard',
    //   }
    // ]

    return {
      open: true,
      menuShowTitle: false,
      menuViewIndex: null,
      menuViewList: [],
      menuView: null,
      assets: this.$route.meta.assets,
      roomName: '',
    }
  },

  created () {
    let menuViewList = []
    for(let name in this.spec.view) {
      let menuView = this.spec.view[name]
      menuView.name = name
      menuViewList.push(menuView)
    }
    this.menuViewList = menuViewList
    this.menuView = menuViewList[0]
  },


  watch: {
    menuViewIndex(index) {
      this.menuView = this.menuViewList[index]
      let pathname = null
    
      pathname = this.menuView.name

      if('custom' === this.menuView.mode) {
        pathname = this.menuView.name
      }
      else {
        pathname = this.menuView.menu.default
      }

      if(pathname && pathname !== this.$route.name ) {
        this.$router.push({path: '/'+pathname})
      }
    }
  },
  
  
  computed: {
    menu () {
      let active_item_code = this.$route.meta.view

      let ux_items = []

      if('standard' === this.menuView.mode) {
        let menu = this.menuView.menu
        let spec_items = menu.items
        let ordered_codes = menu.order.split(/\s*,\s*/)
        ux_items =
          ordered_codes
          .reduce((a,c)=>(a.push(Object.assign({code:c},spec_items[c])),a),[])
          .map(item=>{
            item.klass = Object.assign({
              'vxg-router-link': true,
            })
            return item
          })
      }
      
      return ux_items
    },

    drawerStyle() {
      return {}
    }
  },

  methods: {
    loadAssets(){
      if(this.$route.meta.assets){
        this.assets = this.$route.meta.assets.map(asset=>asset.tag)
        this.roomName = this.$route.meta.assets[0].room
      }
    },
    allow(item) {
      let out = (item && item.allow) ? this.$vxg.allow( item.allow ) : true
      return out
    },
    openDrawer() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicSide', flags:{show:true}})
    },
    closeDrawer() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicSide', flags:{show:false}})
    },
    action(name) {
      this.$emit('action', name)
    }
  }

}
</script>
