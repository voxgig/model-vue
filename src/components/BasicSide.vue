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

      
      <template v-for="item in menu">
        <component
          v-if="allow(item)"
          :is="'router-link'"
          :to="'/main/'+item.code"
          :key="item.code"
          :class="item.klass"
          style="flex-grow:1;"
          >
          <v-icon>mdi-{{ item.icon }}</v-icon> {{ item.title }}
        </component>

      </template>


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
    return {
      open: true,
    }
  },

  created () {
    console.log('BasicSide created', this.spec )
  },
  
  computed: {
    menu () {
      let active_item_code = this.$route.meta.view
      let spec_items = this.spec.menu.items
      let ordered_codes = this.spec.menu.order.split(/\s*,\s*/)
      let ux_items =
          ordered_codes
          .reduce((a,c)=>(a.push(Object.assign({code:c},spec_items[c])),a),[])
          .map(item=>{
            item.klass = Object.assign({
              'vxg-router-link': true,
            })
            return item
          })

      console.log('VXG BasicSide menu', ux_items)
      return ux_items
    },

    drawerStyle() {
      return {}
    }
  },

  methods: {
    allow(item) {
      let out = this.$vxg.allow( item.allow || {} )
      console.log('VXG BasicSide allow', item, out)
      return out
    },
    openDrawer() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicSide', flags:{show:true}})
    },
    closeDrawer() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicSide', flags:{show:false}})
    },
    action(name) {
      console.log('BasicSide action',name)
      this.$emit('action', name)
    }
  }

}
</script>
