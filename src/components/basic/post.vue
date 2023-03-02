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
      <j-icon class="back-icon">mdi-chevron-double-left</j-icon>
      <span @click="back">返回</span>
    </div>
    <slot></slot>
  </div>
</template>
