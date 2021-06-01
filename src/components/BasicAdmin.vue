<template>
<v-app xid="app">

  <vxg-basic-head
    :spec="spec.parts.head"
    :logo="logo"
    />

  <vxg-basic-side
    :spec="spec.parts.side"
    />

  <vxg-basic-main
    :spec="spec.parts.main"
    />
  <!--
  <vxg-basic-foot
    :spec="spec.parts.foot"
    />
-->
</v-app>
</template>

<style lang="scss"></style>

<script>
export default {
  props: ['logo'],
  data () {
    return {
      spec: this.$model.main.app.web
    }
  },

  mounted () {
    console.log('BasicAdmin', !!this.$vuetify)
  }
}
</script>
