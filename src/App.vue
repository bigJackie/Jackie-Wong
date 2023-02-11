<script lang="ts" setup>
import navBar from "./components/basic/navbar.vue";
import scrollTop from "./components/basic/scrollTop.vue";
import blogFooter from "./components/basic/footer.vue";
</script>

<template>
  <div id="app" class="theme">
    <nav-bar />
    <scroll-top />
    <router-view />
    <blog-footer />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}
</style>
