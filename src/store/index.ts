import { ref } from "vue";
import { createGlobalState } from "@vueuse/core";

export const useGlobalState = createGlobalState(() => {
  const posts = ref(new Array());
  return { posts };
});

export interface Post {
  title: string;
  category: string;
  date: string;
  desc: string;
}
