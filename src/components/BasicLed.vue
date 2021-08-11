<template>
<div v-if="allow('list')">
  <v-data-table
    v-if="show.table"
    dense
    :headers="headers"
    :items="items"
    :items-per-page="25"
    x-custom-filter="customFilter"
    :footer-props="{
                   itemsPerPageOptions:[25,50,75,100,-1]
                   }"
    @click:row="openItem"
    :sort-by.sync="sortBy"
    :sort-desc.sync="sortDesc"
    >

    <template
      v-for="header in headers"
      v-slot:[itemslot(header)]="{ item }">
      <div :key="header.value">
        <span v-if="'status'===header.type">
          <v-chip
            small
            xclass="ma-2"
            :color="'outofdate'===item[header.value]?'red':'suspended'===item[header.value]?'orange':'blue'"
            style="font-weight:bold;color:white;"
            >
            {{ (header.kind[item[header.value]]||{}).title }}
          </v-chip>
        </span>
        <span v-else-if="'datetime'===header.type">
          {{ new Date(item[header.value]) }}
        </span>
        <span v-else>{{ item[header.value] }}</span>
      </div>
    </template>
    
  </v-data-table>
  <div v-if="show.item" >
    <v-toolbar flat v-if="showEditToolbar">
      <v-btn outlined @click="customAction('user_reset_password')">Reset Password</v-btn>
      <v-spacer />
    </v-toolbar>

    <div style="box-sizing: border-box; display: flex;flex-flow: row wrap;">
      <div
        v-for="(field,fI) in fields"
        :key="fI"
        class="vxg-form-field"
        :style="fieldstyle(field,fI)"
        >
        
        <v-text-field
          v-if="'string'===field.type"
          :label="field.title"
          v-model="item[field.name]"
          outlined
          :disabled="field.readonly || !allow('edit')"
          ></v-text-field>
        
        <v-select
          v-if="'status'===field.type"
          :items="selection(field)"
          :label="field.title"
          v-model="item[field.name]"
          outlined
          :disabled="field.readonly || !allow('edit')"
          ></v-select>

        <v-text-field
          v-if="'datetime'===field.type"
          :label="field.title"
          v-model="readitem[field.name]"
          outlined
          disabled
          ></v-text-field>

        <vxg-basic-led
          v-if="'basicled'===field.type"
          :spec="field.spec"
          :param="{item:item}"
          ></vxg-basic-led>
          
      </div>
    </div>
    <v-toolbar flat>
      <v-btn outlined @click="closeItem">Cancel</v-btn>
      <v-spacer />
      <v-btn outlined @click="saveItem" v-if="allow('edit')">Save</v-btn>
    </v-toolbar>
  </div>
</div>
</template>

<style lang="scss">
.vxg-form-field {
    padding: 8px;
    box-sizing: border-box;
}

</style>

<script>

console.log('BASICLED')

export default {
  props: {
    spec: {
      type: Object,
      required: true,
    },
    param: {
      type: Object,
      default: ()=>{}
    }
  },

  data () {
    return {
      item: null,
      readitem: null,
      show: {
        table: true,
        item: false,
      },
      sortBy:'when',
      sortDesc:true,
    }
  },

  created () {
    console.log('BasicLed CREATE', 'list_'+this.spec.ent.store_name)
    this.$store.dispatch('list_'+this.spec.ent.store_name)
  },

  watch: {
    '$store.state.trigger.led.add' () {
      console.log('LED ADD', this.spec)
      this.openItem({
        last: Date.now()
      })
    },
    '$route': {
      immediate: true,
      handler() {
        this.$store.dispatch(
          'set_cmp_flags',
          {name:'BasicHead', flags:{
            show:{add:this.spec.edit.active},
            allow:{add:this.allow('edit')}}}
        )
        this.$store.dispatch('set_ent_meta',
                             {name:this.spec.ent.primary.name||'Item'})
      }
    }
  },
  
  computed: {
    headers () {
      let headermap = {}
      Object.entries(this.spec.ent.primary.field)
        .forEach(([fn,fd])=>headermap[fn]={
          value:fn,
          text:fd.title,
          type:fd.type,
          kind:fd.kind||{},
        })

      let headers =
          (this.spec.list.layout.order ?
           this.spec.list.layout.order.split(/\s*,\s*/) :
           Object.keys(this.spec.ent.primary.field)
           )
          .map(fn=>headermap[fn])
          .filter(h=>null!=h)
      
      return headers
    },

    items () {
      let items = this.$store.state[this.spec.ent.store_name]

      if('user-by-role' === this.spec.name) {
        items = items.filter(item=>this.param.item.role===item.profile)
        //items = items.filter(item=>'op'===item.profile)
      }

      return items
    },

    fields () {
      try {
        let fds = []
        let fns = this.spec.edit.layout.order.split(/,/)
        for(let fn of fns) {
          // TODO: remove when model fixed
          // TODO: handle virtual/derived fields cleanly
          let fd = {...this.spec.ent.primary.field[fn]} || {}
          fd.name = fn
          
          //fd.size = this.spec.edit.layout.field[fn].size 
          fd = { ...fd, ...(this.spec.edit.layout.field[fn]||{}) }

          fds.push(fd)
        }
        return fds
      }
      catch(e) {
        console.error(e)
      }
      return []
    },

    showEditToolbar() {
      let active = this.spec.edit.layout.toolbar.active
      if(true === active) {
        return active
      }
      else if(active && active.field) {
        let show = true
        for( let [name, criteria] of Object.entries(active.field)) {
          if('not-empty'===criteria) {
            show = show && (null != this.item[name])
          }
          else {
            show = false
          }
        }
        return show
      }
      return false
    },
  },


  methods: {
    itemslot (header) {
      return 'item.'+header.value
    },

    selection (field) {
      let kinds = field.kind && Object.entries(field.kind) 
      let selects = kinds ? kinds.map(([n,d])=>({text:d.title,value:n})) : []
      // console.log('selects', field, selects)
      return selects
    },

    customAction (action) {
      this.$store.dispatch(action, this.item)
    },

    openItem (selitem) {
      // console.log('OPEN', selitem)
      
      if(false === this.spec.edit.active) { // || !this.allow('edit')) {
        return
      }
      
      this.item = selitem

      this.readitem = {...this.item}

      // TODO: from spec!
      this.readitem.last = this.formatdate(this.item.last)
      
      this.show.table = false
      this.show.item = true
    },

    saveItem () {
      this.$store.dispatch('save_'+this.spec.ent.store_name, this.item)
      this.show.table = true
      this.show.item = false
    },

    closeItem () {
      this.show.table = true
      this.show.item = false
    },

    fieldstyle(field) {
      return {
        'flex-basis': (100*field.size/12)+'%',
      }
    },

    formatdate(time) {
      return new Date(time).toString()
    },


    customFilter (value,search,item) {
      console.log('BasicLed customFilter', value, search, item)
      return true
    },

    allow(action) {
      let out = true
      let match = this.spec[action].allow
      if(match) {
        out = this.$vxg.allow({0:match})
        console.log('VXG BasicLed allow', out, match)
      }
      return out
    }
  }
}
</script>