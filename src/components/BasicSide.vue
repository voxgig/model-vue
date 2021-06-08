<template>
  <v-navigation-drawer
    app
    class="vxg-side"
    >
    <v-sheet style="display: flex; flex-direction: column; height:100%;">

      <div style="display:inline;" v-html="logo">
      </div>

      <template v-for="item in menu">
        <component
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

      
      <a href="#/main/asset" class="vxg-router-link"><i aria-hidden="true" class="v-icon notranslate mdi mdi-help theme--light"></i> Support </a>
      <a href="#/main/asset" class="vxg-router-link"><i aria-hidden="true" class="v-icon notranslate mdi mdi-logout-variant theme--light"></i> Sign out </a>
      
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
</style>


<script>
/*
<div
          :key="item.code"
          class="pqs-nav-menu">
          <v-icon>mdi-{{ item.icon }}</v-icon> {{ item.title }}
        </div>

*/


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
      
    }
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
      return ux_items
    }
  }

}
</script>
