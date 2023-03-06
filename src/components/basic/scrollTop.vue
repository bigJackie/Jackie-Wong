<script lang="ts" setup>
import { useScroll } from "@vueuse/core";
const { y } = useScroll(window);
</script>

<template>
  <div class="scroll-top" :class="{ 'is-show': y > 100 }" @click="y = 0">
    <j-icon size="28" icon="format-vertical-align-top"></j-icon>
  </div>
</template>
