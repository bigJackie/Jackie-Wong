<script lang="ts" setup>
import navBar from "./components/basic/navbar.vue";
</script>

<template>
  <div id="app" class="theme">
    <nav-bar></nav-bar>
    <!-- <aside-bar></aside-bar> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
