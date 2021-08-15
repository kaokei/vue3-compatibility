import { createApp } from "vue";
import App from "./App.vue";

try {
  console.log("before create app");
  createApp(App).mount("#app");
  console.log("after create app");
} catch (error) {
  console.log("catch create app error", error);
  alert('catch error by createApp');
}
