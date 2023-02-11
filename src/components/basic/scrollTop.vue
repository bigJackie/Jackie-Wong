<script lang="ts" setup>
import { useScroll } from "@vueuse/core";
const { y } = useScroll(window);
</script>

<template>
  <div class="scroll-top" :class="{ 'is-show': y > 100 }" @click="y = 0">
    <span class="material-symbols-rounded">north</span>
  </div>
</template>
