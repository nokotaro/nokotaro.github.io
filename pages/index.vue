<template lang="pug">
main
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

export default Vue.extend({
  components: {
    AppLogo,
    CardItem,
  },
  asyncData(context: any) {
    return {
      products: Data.products,
    }
  },
})
</script>

<style lang="stylus" scoped>
.site-header {
  margin: 3rem 0;
}

.cards {
  padding: 3rem 0;
  background-color: #f6f9fc;
}

.card-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
