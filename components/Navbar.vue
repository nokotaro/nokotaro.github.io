<template lang="pug">
div
  header
    nav.navbar.fixed-top.navbar-expand.navbar-dark.bg-dark
      .container-fluid
        nuxt-link.navbar-brand.mb-0.h1(to="/")
          img.d-inline-block.align-top(
            src="/images/favicon.png",
            width="30",
            height="30",
            alt="",
            loading="lazy"
          )
          |
          | Portfolio
        ul.navbar-nav.mr-auto
          li.nav-item
            nuxt-link(
              v-bind:class="[now === 'top' ? 'nav-link active' : 'nav-link']",
              to="/"
            ) Top
          li.nav-item
            nuxt-link(
              v-bind:class="[now === 'about' ? 'nav-link active' : 'nav-link']",
              to="/about"
            ) About
          li.nav-item
            nuxt-link(
              v-bind:class="[now === 'project' ? 'nav-link active' : 'nav-link']",
              to="/project"
            ) Project
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    now: String,
  },
});
</script>
