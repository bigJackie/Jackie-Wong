import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n/index";

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

const app = createApp(App);
app.use(i18n);
app.use(mavonEditor);
app.use(router);
app.mount("#app");
