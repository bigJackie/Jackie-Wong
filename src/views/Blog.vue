<script lang="ts" setup>
import blogCard from "../components/blogcard.vue";

/* blogs */
const blogs = [
  {
    title: "HTTP通信原理",
    label: ["HTTP", "计算机网络"],
    category: "技术杂烩",
    publish_time: "2022-12-02 12:43:26",
    last_modify: "2022-12-02 12:43:26",
    desc: "这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述",
  },
  {
    title: "HTTP通信原理",
    label: ["HTTP", "计算机网络"],
    category: "技术杂烩",
    publish_time: "2022-12-02 12:43:26",
    last_modify: "2022-12-02 12:43:26",
    desc: "这是一段描述",
  },
  {
    title: "HTTP通信原理",
    label: ["HTTP", "计算机网络"],
    category: "技术杂烩",
    publish_time: "2022-12-02 12:43:26",
    last_modify: "2022-12-02 12:43:26",
    desc: "这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述",
  },
  {
    title: "HTTP通信原理",
    label: ["HTTP", "计算机网络"],
    category: "技术杂烩",
    publish_time: "2022-12-02 12:43:26",
    last_modify: "2022-12-02 12:43:26",
    desc: "这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述",
  },
  {
    title: "HTTP通信原理",
    label: ["HTTP", "计算机网络"],
    category: "技术杂烩",
    publish_time: "2022-12-02 12:43:26",
    last_modify: "2022-12-02 12:43:26",
    desc: "这是一段描述",
  },
  {
    title: "HTTP通信原理",
    label: ["HTTP", "计算机网络"],
    category: "技术杂烩",
    publish_time: "2022-12-02 12:43:26",
    last_modify: "2022-12-02 12:43:26",
    desc: "这是一段描述",
  },
  {
    title: "HTTP通信原理",
    label: ["HTTP", "计算机网络"],
    category: "技术杂烩",
    publish_time: "2022-12-02 12:43:26",
    last_modify: "2022-12-02 12:43:26",
    desc: "这是一段描述",
  },
  {
    title: "HTTP通信原理",
    label: ["HTTP", "计算机网络"],
    category: "技术杂烩",
    publish_time: "2022-12-02 12:43:26",
    last_modify: "2022-12-02 12:43:26",
    desc: "这是一段描述",
  },
  {
    title: "HTTP通信原理",
    label: ["HTTP", "计算机网络"],
    category: "技术杂烩",
    publish_time: "2022-12-02 12:43:26",
    last_modify: "2022-12-02 12:43:26",
    desc: "这是一段描述",
  },
];
</script>

<template>
  <div class="blog">
    <div class="blog-container">
      <div class="blog-wrapper">
        <div class="blog-divider"></div>
        <blog-card v-for="(blog, blog_id) in blogs" :key="blog_id" :info="blog"></blog-card>
      </div>
    </div>
  </div>
</template>
