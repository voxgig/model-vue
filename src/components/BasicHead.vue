<template>
<v-app-bar app style="height:64px;background-color:white;">

  <v-btn
    tile
    class="vxg-head-btn"
    @click="addItem"
    >
    <v-icon left medium>
      mdi-map-marker-path
    </v-icon>
    Add Item
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
    }
  },
  
  methods: {
    addItem () {
      this.$store.dispatch('trigger_led_add')
    }
  }
};
</script>
