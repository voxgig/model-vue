<template>
<v-app-bar app style="height:64px;background-color:white;">

  <v-icon
    v-if="!drawerOpen && tool.expandSide.active"
    large
    @click="openDrawer"
    style="display:inline-block;"
    light
    >mdi-chevron-right</v-icon>

  <v-divider
    v-if="!drawerOpen && tool.expandSide.active"
    vertical style="margin:0px 16px;"></v-divider>

  
  <v-btn
    v-if="show('add') && tool.add.active"
    tile
    class="vxg-head-btn"
    @click="addItem"
    >
    <v-icon left medium>
      mdi-map-marker-path
    </v-icon>
    Add {{ itemName }}
  </v-btn>
  
  <v-divider
    v-if="show('add') && tool.add.active"
    vertical style="margin:0px 16px;"></v-divider>


  <v-text-field
    v-if="tool.search.active && show('search')"
    v-model="search"
    flat
    hide-details
    outlined
    dense
    placeholder="Search"
    ></v-text-field>


  <v-spacer
    v-if="tool.avatar.active || tool.expandMain.active"
    ></v-spacer>

  <v-icon
    v-if="tool.avatar.active"
    large
    @click="action('avatar')"
    style="display:inline-block;"
    light
    >mdi-account</v-icon>


  <v-divider
    v-if="!detailOpen && tool.expandMain.active"
    vertical style="margin:0px 16px;"></v-divider>


  <v-icon
    v-if="!detailOpen && tool.expandMain.active"
    large
    @click="closeDetail"
    style="display:inline-block;"
    light
    >mdi-chevron-left</v-icon>



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
    // console.log('BasicHead', this)
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
      return this.$store.state.vxg.cmp.BasicSide?.show
    },
    detailOpen() {
      return !this.$store.state.vxg.cmp.BasicMain?.show
    },
    itemName() {
      return this.$store.state.vxg.ent.meta.name
    },
    tool() {
      // TODO: better if main.app.web.parts.head was provided directly
      let tool = this.$model.main.app.web.parts.head.tool
      return tool
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
    closeDetail() {
      this.$store.dispatch('set_cmp_flags',{name:'BasicMain', flags:{show:false}})
    },

    action(name) {
      this.$emit('action', name)
    }
  }
};
</script>
