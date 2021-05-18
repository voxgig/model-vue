<template>
<v-app-bar app clipped-left style="height:64px;">

  <div style="display:inline;" v-html="logo">
   
  </div>

  <v-spacer></v-spacer>
  
  <v-icon size="large" style="color:white;">mdi-bell</v-icon>
  
  <v-icon style="color:white;">mdi-logout</v-icon>
  
</v-app-bar>
</template>

<style lang="scss"></style>

<script>
export default {
  props: ['logo'],

  data () {
    return {
    }
  },

  mounted () {
    console.log('BasicHead', this)
  }
};
</script>
