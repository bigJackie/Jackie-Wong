<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

function back() {
  router.push("/blog");
}
</script>

<template>
  <div class="post">
    <div class="back">
      <span class="material-symbols-rounded back-icon">keyboard_double_arrow_left</span>
      <span @click="back">返回</span>
    </div>
    <slot></slot>
  </div>
</template>
