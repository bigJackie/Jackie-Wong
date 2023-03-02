<script lang="ts" setup>
import { ref } from "vue";
const index = ref(1);
</script>

<template>
  <div class="pagination">
    <!-- <span class="material-symbols-rounded page-nav">west</span> -->
    <div class="page-item" :class="{ 'is-chosen': index == id + 1 }" v-for="(item, id) in 9" :key="item">
      <span>{{ id + 1 }}</span>
    </div>
    <!-- <span class="material-symbols-rounded page-nav">east</span> -->
  </div>
</template>
