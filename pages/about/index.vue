<template lang="pug">
main
  Navbar(now="about")
  header.site-header
    .container
      app-logo
  body
    .container
      .row.row-cols-1.row-cols-sm-2.row-cols-md-3.g-3
        .col-sm-4
          .card
            svg.bd-placeholder-img.card-img-top(
              width="100%",
              height="180",
              xmlns="http://www.w3.org/2000/svg",
              preserveaspectratio="xMidYMid slice",
              focusable="false",
              role="img",
              aria-label="Placeholder: Image cap"
            )
              title Placeholder
              rect(fill="#868e96", width="100%", height="100%")
              text(fill="#dee2e6", x="50%", y="50%")
            .card-body
              h5.card-title Card title
              h6.card-subtitle.mb-2.text-muted Card subtitle
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.
              a.btn.btn-success(href="#") Go somewhere
        .col-sm-4
          .card
            svg.bd-placeholder-img.card-img-top(
              width="100%",
              height="180",
              xmlns="http://www.w3.org/2000/svg",
              preserveaspectratio="xMidYMid slice",
              focusable="false",
              role="img",
              aria-label="Placeholder: Image cap"
            )
              title Placeholder
              rect(fill="#868e96", width="100%", height="100%")
              text(fill="#dee2e6", x="50%", y="50%")
            .card-body
              h5.card-title Card title
              h6.card-subtitle.mb-2.text-muted Card subtitle
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.
              a.btn.btn-success(href="#") Go somewhere
        .col-sm-4
          .card
            svg.bd-placeholder-img.card-img-top(
              width="100%",
              height="180",
              xmlns="http://www.w3.org/2000/svg",
              preserveaspectratio="xMidYMid slice",
              focusable="false",
              role="img",
              aria-label="Placeholder: Image cap"
            )
              title Placeholder
              rect(fill="#868e96", width="100%", height="100%")
              text(fill="#dee2e6", x="50%", y="50%")
            .card-body
              h5.card-title Card title
              h6.card-subtitle.mb-2.text-muted Card subtitle
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.
              a.btn.btn-success(href="#") Go somewhere
        .col-sm-4
          .card
            svg.bd-placeholder-img.card-img-top(
              width="100%",
              height="180",
              xmlns="http://www.w3.org/2000/svg",
              preserveaspectratio="xMidYMid slice",
              focusable="false",
              role="img",
              aria-label="Placeholder: Image cap"
            )
              title Placeholder
              rect(fill="#868e96", width="100%", height="100%")
              text(fill="#dee2e6", x="50%", y="50%")
            .card-body
              h5.card-title Card title
              h6.card-subtitle.mb-2.text-muted Card subtitle
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.
              a.btn.btn-success(href="#") Go somewhere
        .col-sm-4
          .card
            svg.bd-placeholder-img.card-img-top(
              width="100%",
              height="180",
              xmlns="http://www.w3.org/2000/svg",
              preserveaspectratio="xMidYMid slice",
              focusable="false",
              role="img",
              aria-label="Placeholder: Image cap"
            )
              title Placeholder
              rect(fill="#868e96", width="100%", height="100%")
              text(fill="#dee2e6", x="50%", y="50%")
            .card-body
              h5.card-title Card title
              h6.card-subtitle.mb-2.text-muted Card subtitle
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.
              a.btn.btn-success(href="#") Go somewhere
        .col-sm-4
          .card
            svg.bd-placeholder-img.card-img-top(
              width="100%",
              height="180",
              xmlns="http://www.w3.org/2000/svg",
              preserveaspectratio="xMidYMid slice",
              focusable="false",
              role="img",
              aria-label="Placeholder: Image cap"
            )
              title Placeholder
              rect(fill="#868e96", width="100%", height="100%")
              text(fill="#dee2e6", x="50%", y="50%")
            .card-body
              h5.card-title Card title
              h6.card-subtitle.mb-2.text-muted Card subtitle
              p.card-text
                | Some quick example text to build on the card title and make up the bulk of the card's content.
              a.btn.btn-success(href="#") Go somewhere
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
