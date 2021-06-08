<template>
<v-main app>
  <v-container
    class="py-5 px-5"
    fluid
    >

    <component
      :is="'router-view'"
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
