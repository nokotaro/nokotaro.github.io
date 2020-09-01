<template lang="pug">
.author
  .author-container
    .author-avatar
      img.avatar(src="/images/icon.png")
    .author-title
      .namerepo
        .author-name Nokotaro Takeda
        .slash
        .repo
      .github-link
        a.anchor(href="https://github.com/nokotaro", target="_blank")
          i.
            <font-awesome-icon :icon="['fab', 'github']" />
          span GitHub
      .github-link
        a.anchor(href="https://twitter.com/takenoko_0714", target="_blank")
          i.
            <font-awesome-icon :icon="['fab', 'twitter']" />
          span Twitter
      .github-link
        a.anchor(href="https://keybase.io/takenoko", target="_blank")
          i.
            <font-awesome-icon :icon="['fab', 'keybase']" />
          span Keybase
      .github-link
        a.anchor(href="https://fedibird.com/@takenoko", target="_blank")
          i.
            <font-awesome-icon :icon="['fab', 'mastodon']" />
          span Mastodon
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["arg"],
});
</script>

<style lang="stylus" scoped>
.author {
  display: flex;
  justify-content: space-between;
}

.author-container {
  display: flex;
  align-items: flex-start;
}

.avatar {
  width: 72px;
  height: 72px;
  margin-right: 1rem;
  border-radius: 20%;
}

.author-title {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .namerepo {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    line-height: 2;

    .slash {
      padding: 0 0.2em;
      font-weight: 200;
    }
  }
}

.anchor {
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: inherit;

  i {
    display: flex;
    margin-right: 0.5em;
  }

  span {
    padding-top: 2px;
  }
}
</style>
