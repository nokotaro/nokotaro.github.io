<template lang="pug">
div
  header
    nav.navbar.fixed-top.navbar-expand-sm.bg-dark.navbar-dark
      nuxt-link.navbar-brand(to="/")
        img(src="/images/icon.png", width="30", height="30", alt="")
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
