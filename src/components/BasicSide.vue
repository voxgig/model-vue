<template>
  <v-navigation-drawer
    app
    height="0"
    >
    <v-sheet
        color="grey lighten-4"
        class="pa-4"
        style="border-right: 2px solid #ccc;height:100%"
        >

      <template v-for="item in menu">
        <div
          :key="item.code"
          class="pqs-nav-menu">
          <v-icon>mdi-{{ item.icon }}</v-icon> {{ item.title }}
        </div>
      </template>

      <div style="min-height:100px">
        &nbsp;
      </div>
      
      
      <v-divider></v-divider>
      
      <div class="pqs-nav-menu">
        <v-icon>mdi-lifebuoy</v-icon> Support
      </div>

      <div style="min-height:100vh">
        &nbsp;
      </div>

      
    </v-sheet>
  </v-navigation-drawer>
</template>

<style lang="scss"></style>


<script>
export default {

  props: {
    spec: {
      type: Object,
      required: true,
    }
  },
  
  data () {
    return {
      
    }
  },

  computed: {
    menu () {
      let items = this.spec.menu.items
      return this.spec.menu.order.split(/,/)
        .reduce((a,c)=>(items[c].code = c,a.push(items[c]),a),[])
    }
  }

}
</script>
