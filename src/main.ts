import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(ElementPlus).use(store).use(router).mount("#app");

import axios from "axios";

axios({
  url: "/dev-api/login",
  method: "POST",
  data: {
    name: "coderwhy",
    password: "123456",
  },
})
  .then((res) => {
    console.log("res===>", res);
  })
  .catch((error) => {
    console.log("error", error);
  });

//获取到变量值
console.log(process.env.VUE_APP_BASE_API);
