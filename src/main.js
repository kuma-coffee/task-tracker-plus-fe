import { createApp } from "vue"; // Menggunakan "createApp" dari Vue 3
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";
const BASE_URL = process.env.BASE_URL;

var beAPI = axios.create({
  baseURL: BASE_URL,
});

export { beAPI };

const app = createApp(App); // Membuat aplikasi Vue 3
app.use(router);

app.config.globalProperties.$be_http = beAPI; // Menggunakan "config.globalProperties" untuk menambahkan properti global
app.mount("#app");
