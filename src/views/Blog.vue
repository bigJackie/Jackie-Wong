<script lang="ts" setup>
import blogCard from "../components/blogcard.vue";
import { useGlobalState } from "../store/index";

let blogs: Array<Object> = useGlobalState().posts.value;
</script>

<template>
  <div class="blog">
    <div class="blog-container">
      <div class="blog-wrapper">
        <div class="blog-divider"></div>
        <blog-card v-for="(blog, blog_id) in blogs" :key="blog_id" :post="blog"></blog-card>
      </div>
    </div>
  </div>
</template>
