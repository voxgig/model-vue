<template>
<v-app id="app">

  <vxg-basic-head
    :spec="spec.parts.head"
    :logo="logo"
    />

  <vxg-basic-side
    v-if="showSide"
    :spec="spec.parts.side"
    :logo="logo"
    @action="action('BasicSide', $event)"
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
    // console.log('BasicAdmin', !!this.$vuetify)
  },

  computed: {
    showSide() {
      return this.$store.state.vxg.cmp.BasicSide.show
    }
  },

  methods: {
    action(part, ev) {
      console.log('BasicAdmin action', part, ev)
      this.$emit('action', {part,event:ev})
    }
  }
}
</script>
