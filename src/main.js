import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import VueClipboard from "vue-clipboard2";

createApp(App).use(router).use(store).use(VueClipboard).mount("#app");
