<script lang="ts" setup>
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
const props = defineProps({
  post: { type: Object, default: undefined },
});

const card = ref(null);
const cardIsVisible = ref(false);
const { stop } = useIntersectionObserver(card, ([{ isIntersecting }], observerElement) => {
  cardIsVisible.value = isIntersecting;
  if (isIntersecting) {
    stop();
  }
});
</script>

<template>
  <div class="blog-card" ref="card" :class="{ 'is-visible': cardIsVisible }">
    <div class="divider"></div>
    <span class="title">{{ post!.title }}</span>
    <ul class="info-box flex items-center">
      <li class="label">{{ post!.label }}</li>
      <li class="category mr-8">{{ post!.category }}</li>
      <li class="date">{{ post!.date }}</li>
    </ul>
    <p class="desc">{{ post!.desc }}</p>
    <router-link class="read-more" :to="`\/blog\/${post?.path}`">
      <span>{{ $t("blog.card.read_more") }}</span>
      <j-icon class="read-more-icon" size="20" icon="chevron-double-right"></j-icon>
    </router-link>
  </div>
</template>
