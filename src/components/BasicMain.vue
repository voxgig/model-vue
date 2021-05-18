<template>
<v-main style="padding-top:0;">
  <v-container
    class="py-5 px-5"
    fluid
    style="background-color:#eee;height:100%;"
    >

    <component
      :is="spec.part.name"
      v-bind="spec.part.spec"
      />
    
  </v-container>
</v-main>
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
  
  data: () => ({
  }),
};

</script>
