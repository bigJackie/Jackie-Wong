<script lang="ts" setup>
const props = defineProps({
  info: { type: Object, default: undefined },
  // title:{type: String, default: undefined},
  // label:{type: String, default: undefined},
  // category:{type: String, default: undefined},
  // publish_da:{type: String, default: undefined},
  // title:{type: String, default: undefined},
});
</script>

<template>
  <div class="blog-card">
    <div class="divider"></div>
    <span class="title">{{ info!.title }}</span>
    <ul class="info-box">
      <li class="label">{{ info!.label }}</li>
      <li class="category">{{ info!.category }}</li>
      <!-- <li class="publish-time">{{ info!.publish_time }}</li> -->
      <!-- <li class="last-modify">{{ info!.last_modify }}</li> -->
    </ul>
    <p class="desc">{{ info!.desc }}</p>
    <button class="read-more">{{ $t("blog.card.read_more") }}</button>
  </div>
</template>
