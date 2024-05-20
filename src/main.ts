import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import { scaleDirective } from "./utils";

createApp(App).directive('scale',scaleDirective).use(router).use(createPinia()).mount("#app");
