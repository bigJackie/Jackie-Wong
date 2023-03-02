import { createApp } from "vue";

import App from "./App.vue";
import router from "./router/index";
import i18n from "./i18n/index";
import JUI from "@jackiew/jui";
import "@mdi/font/css/materialdesignicons.css";

import post from "./components/basic/post.vue";

const app = createApp(App);

app.component("post", post);
app.use(JUI);
app.use(i18n);
app.use(router);
app.mount("#app");
