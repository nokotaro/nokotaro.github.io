<template lang="pug">
main
  Navbar(now="about")
  header.site-header
    .container
      app-logo
  section.cards
    .container
      .card-list
</template>

<script lang="ts">
import Vue from "vue";
import AppLogo from "~/components/AppLogo.vue";
import Navbar from "~/components/Navbar.vue";

export default Vue.extend({
  components: {
    AppLogo,
    Navbar,
  },
});
</script>

<style lang="stylus" scoped>
.site-header {
  margin: 6rem 0 2rem 0;
}
</style>
