import { createApp } from "vue"; // Menggunakan "createApp" dari Vue 3
import App from "./App.vue";
import router from "./router/index";
import axios from "axios";

var beAPI = axios.create({
  baseURL: "https://task-tracker-plus-be.onrender.com/",
});

export { beAPI };

const app = createApp(App); // Membuat aplikasi Vue 3
app.use(router);

app.config.globalProperties.$be_http = beAPI; // Menggunakan "config.globalProperties" untuk menambahkan properti global
app.mount("#app");
