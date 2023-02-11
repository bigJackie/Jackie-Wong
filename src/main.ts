import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/index";
import i18n from "./i18n/index";

import post from "./components/basic/post.vue";

const app = createApp(App);

app.component("post", post);

app.use(i18n);
app.use(router);
app.mount("#app");
