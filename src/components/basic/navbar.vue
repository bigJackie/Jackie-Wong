<script lang="ts" setup>
import { ref } from "vue";
/*
 * data
 */
let blog_name_img = ref("https://share.jackiewongz.com/resources/blog_title_black.png");
/* navigation */
const nav_items = [
  { name: "nav.title.home", src: "/" },
  { name: "nav.title.blog", src: "/blog" },
  { name: "nav.title.archive", src: "/archive" },
  { name: "nav.title.message", src: "/message" },
];
let light_mode = true;
let english_mode = false;

/*
 * methods
 */
function themeChange() {
  if (light_mode) {
    window.document.documentElement.setAttribute("class", "dark");
    blog_name_img.value = "https://share.jackiewongz.com/resources/blog_title_white.png";
  } else {
    window.document.documentElement.setAttribute("class", "");
    blog_name_img.value = "https://share.jackiewongz.com/resources/blog_title_black.png";
  }
  light_mode = !light_mode;
}

function langChange() {}
</script>

<template>
  <nav class="nav">
    <img class="nav-img" :src="blog_name_img" />
    <!-- <ul class="nav-items">
      <li class="nav-item" v-for="(nav_item, nav_id) in nav_items" :key="nav_id">
        <router-link :to="nav_item.src" class="nav-item-text">
          <span>{{ $t(nav_item.name) }}</span>
        </router-link>
      </li>
    </ul> -->
    <div class="nav-actions">
      <!-- <j-icon class="nav-icon" disabled size="32">mdi-ideogram-cjk-variant</j-icon> -->
      <a target="_blank" title="github" href="https://github.com/bigJackie/">
        <j-icon class="nav-icon" color="black" size="32">mdi-github</j-icon>
      </a>
      <j-icon color="black" size="32" v-show="light_mode" class="nav-icon" @click="themeChange">
        mdi-weather-sunny
      </j-icon>
      <j-icon color="black" size="32" v-show="!light_mode" class="nav-icon" @click="themeChange">
        mdi-weather-night
      </j-icon>
    </div>
    <div class="nav-actions mobile">
      <j-icon color="black" size="32" class="nav-icon">mdi-menu</j-icon>
    </div>
  </nav>
</template>
