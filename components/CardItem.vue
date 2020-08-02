<template lang="pug">
a.card(:href="arg.link", target="_blank")
  img(:src="`images/card-${arg.id}.jpg`")
  .card-content
    .card-title {{ arg.title }}
    .card-desc {{ arg.desc }}
</template>

<script>
export default {
  props: ["arg"],
};
</script>

<style lang="stylus" scoped>
.card {
  position: relative;
  display: flex;
  width: 350px;
  height: 300px;
  /* width calc(1110px / 3 - 2rem) */
  margin: 0.5rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  border: 0px;
  background: rgba(100, 100, 100, 0.03);

  img {
    position: absolute;
    z-index: 0;
    flex: 1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .card-content {
    z-index: 1;
    width: 100%;
    margin-top: 164px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #fff;
    padding: 1rem;
  }

  .card-title {
    font-size: 24px;
    font-weight: bold;
    margin: 0 0 0.5em;
  }
}
</style>
