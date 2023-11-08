<template>
  <div class="min-h-full">
    <Navbar :email="this.email" />

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Dashboard
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Content -->
        <ul
          role="list"
          class="divide-y divide-gray-100"
          v-for="userTaskCategory in user_task_categories"
          :key="userTaskCategory.id"
        >
          <li class="flex justify-between gap-x-6 py-5">
            <div class="flex gap-x-4">
              <img
                class="h-12 w-12 flex-none rounded-full bg-gray-50"
                src="https://th.bing.com/th/id/OIP.LIIGL_iDaPWMIcK_4XmevAHaHa?pid=ImgDet&rs=1"
                alt=""
              />
              <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">
                  {{ userTaskCategory.fullname }}
                </p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                  {{ userTaskCategory.email }}
                </p>
              </div>
            </div>
            <div class="hidden sm:flex sm:flex-col sm:items-end">
              <p class="text-sm leading-6 text-gray-900">
                {{ userTaskCategory.task }}
              </p>
              <p class="mt-1 text-xs leading-5 text-gray-500">
                Deadline <time>{{ userTaskCategory.deadline }}</time>
              </p>
              <div class="mt-1 flex items-center gap-x-1.5">
                <div
                  v-if="userTaskCategory.status === 'Completed'"
                  class="flex-none rounded-full bg-emerald-500/20 p-1"
                >
                  <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <div
                  v-else-if="userTaskCategory.status === 'In Progress'"
                  class="flex-none rounded-full bg-yellow-500/20 p-1"
                >
                  <div class="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                </div>
                <div v-else class="flex-none rounded-full bg-gray-500/20 p-1">
                  <div class="h-1.5 w-1.5 rounded-full bg-gray-500"></div>
                </div>
                <p class="text-xs leading-5 text-gray-500">
                  {{ userTaskCategory.status }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "../../components/navbar.vue";
import VueCookies from "vue-cookies";

export default {
  props: ["email"],
  data() {
    return {
      user_task_categories: [],
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async getUserTaskCategories() {
      // const token = VueCookies.get("session_token");
      const resp = await this.$be_http.get("/api/v1/user/tasks", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${VueCookies.get("session_token")}`,
        },
      });
      this.user_task_categories = [];
      if (resp.data && Array.isArray(resp.data)) {
        this.user_task_categories = resp.data.map((element) => ({
          id: element.id,
          fullname: element.fullname,
          email: element.email,
          task: element.task,
          deadline: element.deadline,
          priority: element.priority,
          status: element.status,
          category: element.category,
        }));
      } else {
        console.error("Data tidak valid atau tidak ditemukan dalam respons.");
      }
    },
  },
  mounted() {
    console.log(VueCookies.get("session_token"));
    this.getUserTaskCategories();
  },
};
</script>

<style></style>
