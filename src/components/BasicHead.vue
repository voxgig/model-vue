<template>
<v-app-bar app :class="appBarClasses">

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


  <v-select
    v-if="show('select') && tool.select.active"
    style="max-width:20%;display:inline-block;margin-left:10px;"
    :items="selectItems()"
    :label="tool.select.title"
    v-model="select"
    tile
    outlined
    hide-details
    dense
    ></v-select>

  
  <v-divider
    v-if="show('select') && tool.select.active"
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


  <v-btn
    v-if="show('remove') && tool.remove.active"
    tile
    class="vxg-head-btn"
    @click="removeItem"
    >
    <v-icon left medium>
      mdi-map-marker-path
    </v-icon>
    Remove {{ itemName }}
  </v-btn>
  
  <v-divider
    v-if="show('remove') && tool.remove.active"
    vertical style="margin:0px 16px;"></v-divider>

  <v-combobox
    v-if="tool.search.active && show('search')"
    v-model="search"
    :items="getTags()"
    flat
    hide-details
    outlined
    dense
    clearable
    placeholder="Search"
    :append-icon="filterIcon?'mdi-filter':undefined"
    @click:append="filter"
    >
  </v-combobox> 


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

  <v-divider vertical v-if="show('print')"></v-divider>
  <li v-for="feature of featuresMenu" style="list-style-type: none;" :key="feature.title">
    <v-btn v-if="feature.title != 'bookmark' && tool[feature.title].active && show(feature.title)"
      large elevation="0" class="pa-1 ma-1" color="white" style="height: 55px" @click="feature.click()">
      <v-icon large class="vxg-icon">{{feature.icon}}</v-icon>
    </v-btn>

    <v-btn v-if="feature.title == 'bookmark' && tool.bookmark.active && show('bookmark') && bookmarkVisible" 
      large elevation="0" class="pa-1 ma-1" color="white" style="height: 55px" @click="feature.click()">
      <v-icon large class="vxg-icon">{{feature.icon}}</v-icon>
    </v-btn>
    <v-btn v-if="feature.title == 'bookmark' && tool.bookmark.active && show('bookmark') && !bookmarkVisible" 
      large elevation="0" class="pa-1 ma-1" color="white" style="height: 55px" disabled>
      <v-icon large class="vxg-icon">{{feature.icon}}</v-icon>
    </v-btn>

    <v-divider vertical v-if="show(feature.title)"></v-divider>
  </li>

</v-app-bar>
</template>

<style lang="scss">
.vxg-icon {
    padding: 20px;
}

.vxg-app-bar {
    height: 64px;
    background-color: white;
    margin-left: 255px;
}

.vxg-app-bar-changed {
    margin-left: 25px;
}

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
      search: '',
      select: '',
      view: {
        tool: {}
      },
      filterIcon: true,
    }
  },

  created () {
    let features = ['print', 'bookmark', 'collect']
    for(let feature of features) {
      this.featuresMenu.push(Object.assign({}, 
        this.tool[feature], 
        {title: feature, click: this[this.tool[feature].click]}))
    }
    // console.log('featuresMenu:  ', this.featuresMenu)
  },
  
  mounted () {
    this.$route.meta.refs = this.$refs
    if(this.tool.select.active) {
      this.select = this.tool.select.initial
    }
  },
  

  watch: {
    search () {
      this.$store.dispatch('trigger_search', {term:this.search})
    },
    select () {
      console.log('SELECT', this.select)
      this.$store.dispatch('trigger_select', {value:this.select})
    },
    '$store.vxg.cmp.BasicHead.allow.add': {
      handler() {
        this.$forceUpdate()
      }
    },
    '$store.vxg.cmp.BasicHead.allow.remove': {
      handler() {
        this.$forceUpdate()
      }
    },
    route$: {
      immediate: true,
      handler (val) {
        let name = this.$route.name
        let view = this.$model.main.app.web.view[name]
        if(view && view.head) {
          this.view.tool = view.head.tool
        }
      }
    }
  },
  
  computed: {
    appBarClasses() {
      if(this.$store.state.vxg.cmp.BasicSide.show) {
        return 'vxg-app-bar'
      }
      else {
        return 'vxg-app-bar vxg-app-bar-changed'
      }
    },
    bookmarkVisible() {
      return this.$store.state.trigger.bookmark.visible
    },
    drawerOpen() {
      return this.$store.state.vxg.cmp.BasicSide.show
    },
    detailOpen() {
      return !this.$store.state.vxg.cmp.BasicMain.show
    },
    itemName() {
      return this.$store.state.vxg.ent.meta.name
    },
    tool() {
      // TODO: better if main.app.web.parts.head was provided directly
      let headtool = this.$model.main.app.web.parts.head.tool
      let viewtool = this.view.tool
      let tool = this.$main.seneca.util.deep(headtool, viewtool)
      return tool
    }
  },
  
  methods: {
    printMap () {
      this.$store.dispatch('vxg_trigger_printMap')
    },
    
    showTags() {
      this.$store.dispatch('adjust_trigger_bookmark')
    },

    getTags() {
      let tool = {}
      this.$store.dispatch('vxg_get_assets', tool)
      return tool.assets.map(v=>v.tag)
    },

    addItem () {
      this.$store.dispatch('trigger_led_add')
    },

    removeItem () {
      this.$store.dispatch('trigger_led_remove')
    },

    selectItems () {
      let items = []
      if(this.tool.select.items) {
        Object.entries(this.tool.select.items).reduce((items, entry)=>{
          items.push({value:entry[0], text:entry[1].title})
          return items
        }, items)
      }
      console.log('selectItems', items)
      return items
    },

    filter() {
      this.$store.dispatch('trigger_toggle_filter')
    },
    
    show(action) {
      return this.allow(action) &&
        this.$store.state.vxg.cmp.BasicHead.show[action] 
    },
    
    allow(action) {
      let allowed = this.$store.state.vxg.cmp.BasicHead.allow[action]
      return null == allowed ? true : allowed
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
