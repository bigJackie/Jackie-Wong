<script lang="ts" setup>
import { ref } from "vue";
/*
 * data
 */
let blog_name_img = ref("http://blog.jackiewongz.com/resources/pic/blog_title_black.png");
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
    window.document.documentElement.setAttribute("theme", "dark");
    blog_name_img.value = "http://blog.jackiewongz.com/resources/pic/blog_title_white.png";
  } else {
    window.document.documentElement.setAttribute("theme", "");
    blog_name_img.value = "http://blog.jackiewongz.com/resources/pic/blog_title_black.png";
  }
  light_mode = !light_mode;
}

function langChange() {}
</script>

<template>
  <nav class="nav">
    <img class="nav-img" :src="blog_name_img" />
    <ul class="nav-items">
      <li class="nav-item" v-for="(nav_item, nav_id) in nav_items" :key="nav_id">
        <router-link :to="nav_item.src" class="nav-item-text">
          <span>{{ $t(nav_item.name) }}</span>
        </router-link>
      </li>
    </ul>
    <div class="nav-actions">
      <span class="material-symbols-rounded nav-icon">search</span>
      <span class="material-symbols-rounded nav-icon">translate</span>
      <span class="material-symbols-rounded nav-icon" @click="themeChange">
        {{ light_mode ? "light_mode" : "dark_mode" }}
      </span>
    </div>
    <div class="nav-actions mobile">
      <span class="material-symbols-rounded nav-icon">menu</span>
    </div>
  </nav>
</template>
