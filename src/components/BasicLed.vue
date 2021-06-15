<template>
<div>
  <v-data-table
    v-if="show.table"
    :headers="headers"
    :items="items"
    :items-per-page="25"
    dense
    :footer-props="{
                   itemsPerPageOptions:[25,50,75,100,-1]
                   }"
    @click:row="openItem"
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
            {{ header.kind[item[header.value]].title }}
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
          ></v-text-field>
        
        <v-select
          v-if="'status'===field.type"
          :items="selection(field)"
          :label="field.title"
          v-model="item[field.name]"
          outlined
          ></v-select>
        
      </div>
    </div>
    <v-toolbar flat>
      <v-btn outlined @click="closeItem">Cancel</v-btn>
      <v-spacer />
      <v-btn outlined @click="closeItem">Save</v-btn>
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
export default {
  props: {
    spec: {
      type: Object,
      required: true,
    },
    rows: {
      type: Array,
      required: true,
    }
  },

  data () {
    return {
      item: null,
      show: {
        table: true,
        item: false,
      },
    }
  },

  computed: {
    headers () {
      return Object.entries(this.spec.ent.primary.field)
        .map(([fn,fd])=>({
          value:fn,
          text:fd.title,
          type:fd.type,
          kind:fd.kind||{},
        }))
    },

    items () {
      return this.rows
    },

    fields () {
      try {
        let fds = []
        let fns = this.spec.edit.layout.order.split(/,/)
        for(let fn of fns) {
          // TODO: remove when model fixed
          let fd = {...this.spec.ent.primary.field[fn]}
          fd.name = fn
          fd.size = this.spec.edit.layout.field[fn].size 
          fds.push(fd)
        }
        return fds
      }
      catch(e) {
        console.log(e)
      }
      return []
    }
  },


  methods: {
    itemslot (header) {
      return 'item.'+header.value
    },

    selection (field) {
      let selects =  Object.entries(field.kind).map(([n,d])=>({text:d.title,value:n}))
      console.log('selects', field, selects)
      return selects
    },

    openItem (selitem) {
      console.log('OPEN', selitem)
      
      if(false === this.spec.edit.active) {
        return
      }
      
      this.item = selitem

      this.show.table = false
      this.show.item = true
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
  }
}
</script>
