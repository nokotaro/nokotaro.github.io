<template>
  <div>
    <header>
      <nav class="navbar fixed-top navbar-expand-sm bg-dark navbar-dark">
        <nuxt-link class="navbar-brand" to="/">
          <img src="icon.png" width="30" height="30" alt /> Portfolio
        </nuxt-link>
        <button class="btn btn-sm btn-success" type="button">Top</button>
        <ul class="navbar-nav mr-auto"></ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    now: String,
  },
};
</script>
