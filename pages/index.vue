<template lang="pug">
main
  Navbar
  header.site-header
    .container
      app-logo

  section.cards
    .container
      .card-list
        card-item(v-for="p in products", :arg="p", :key="p.title")
</template>

<script lang="ts">
import Vue from "vue";
import AppLogo from "~/components/AppLogo.vue";
import CardItem from "~/components/CardItem.vue";
import Data from "~/store/data.json";
import Navbar from "~/components/Navbar.vue";

export default Vue.extend({
  components: {
    AppLogo,
    CardItem,
    Navbar,
  },
  asyncData(context: any) {
    return {
      products: Data.products,
    };
  },
});
</script>

<style lang="stylus" scoped>
.site-header {
  margin: 6rem 0 2rem 0;
}

.cards {
  padding: 2rem 0;
  background-color: #f6f9fc;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
