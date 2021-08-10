<template>
<v-app-bar app style="height:64px;background-color:white;">

  <v-icon
    v-if="!drawerOpen"
    large
    @click="openDrawer"
    style="display:inline-block;"
    light
    >mdi-chevron-right</v-icon>

  <v-divider
    v-if="!drawerOpen"
    vertical style="margin:0px 16px;"></v-divider>
  
  <v-btn
    v-if="show('add')"
    tile
    class="vxg-head-btn"
    @click="addItem"
    >
    <v-icon left medium>
      mdi-map-marker-path
    </v-icon>
    Add {{ itemName }}
  </v-btn>
  
  <v-divider vertical style="margin:0px 16px;"></v-divider>

  <v-text-field
    v-model="search"
    flat
    hide-details
    outlined
    dense
    placeholder="Search"
    ></v-text-field>

  
  <!--
  <div style="display:inline;" v-html="logo">
   
  </div>


  
  <v-spacer></v-spacer>


  <v-icon >mdi-bell</v-icon>
  
  <v-icon >mdi-logout</v-icon>
-->

</v-app-bar>
</template>

<style lang="scss">
.vxg-head-btn {

    height: 100%;
    background-color: white !important;
    color: rgb(var(--vxg-ct0));
    text-transform: none !important;
    box-shadow: none !important;
    
    .v-icon {
        color: rgb(var(--vxg-ci0)) !important;
    }
}
</style>

<script>
export default {
  props: ['logo'],

  data () {
    return {
      search: ''
    }
  },

  mounted () {
    console.log('BasicHead', this)
  },

  watch: {
    search () {
      this.$store.dispatch('trigger_search', {term:this.search})
    },
    '$store.vxg.cmp.BasicHead.allow.add': {
      handler() {
        this.$forceUpdate()
      }
    }
  },
  
  computed: {
    drawerOpen() {
      return this.$store.state.vxg.cmp.BasicSide.show
    },
    itemName() {
      return this.$store.state.vxg.ent.meta.name
    }
  },
  
  methods: {
    addItem () {
      this.$store.dispatch('trigger_led_add')
    },

    show(action) {
      return this.allow(action) && this.$store.state.vxg.cmp.BasicHead.show[action]
    },
    
    allow(action) {
      if('add' === action) {
        return this.$store.state.vxg.cmp.BasicHead.allow.add
      }
      return true
    },
    openDrawer() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicSide', flags:{show:true}})
    },
  }
};
</script>
