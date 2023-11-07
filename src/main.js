import { createApp } from "vue"; // Menggunakan "createApp" dari Vue 3
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
import VueCookies from "vue-cookies";

var beAPI = axios.create({
  baseURL: "http://localhost:8080",
});

export { beAPI };

const app = createApp(App); // Membuat aplikasi Vue 3
app.use(router);

app.config.globalProperties.$be_http = beAPI; // Menggunakan "config.globalProperties" untuk menambahkan properti global
app.mount("#app");
