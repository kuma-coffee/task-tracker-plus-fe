<template>
  <div class="min-h-full">
    <Navbar :email="this.email" />

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Task</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <!-- Your content -->
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              class="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2
              class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
            >
              Update Task
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              class="space-y-6"
              @submit.prevent="updateTask(task.id)"
              method="POST"
            >
              <div>
                <label
                  for="id"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >ID</label
                >
                <div class="mt-2">
                  <input
                    id="id"
                    name="id"
                    type="number"
                    v-model="task.id"
                    readonly
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="title"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Title</label
                >
                <div class="mt-2">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    v-model="task.title"
                    autocomplete="title"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="deadline"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Deadline</label
                >
                <div class="mt-2">
                  <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    v-model="task.deadline"
                    autocomplete="deadline"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="priority"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Priority</label
                >
                <div class="mt-2">
                  <input
                    id="priority"
                    name="priority"
                    type="number"
                    v-model="task.priority"
                    autocomplete="priority"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="status"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Status</label
                >
                <div class="mt-2">
                  <input
                    id="status"
                    name="status"
                    type="text"
                    v-model="task.status"
                    autocomplete="status"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="category_id"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Category ID</label
                >
                <div class="mt-2">
                  <input
                    id="category_id"
                    name="category_id"
                    type="number"
                    v-model="task.category_id"
                    autocomplete="category_id"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  for="user_id"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >User ID</label
                >
                <div class="mt-2">
                  <input
                    id="user_id"
                    name="user_id"
                    v-model="task.user_id"
                    type="number"
                    autocomplete="user_id"
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Update Task
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "../../components/navbar.vue";
import VueCookies from "vue-cookies";

export default {
  data() {
    return {
      id: null,
      email: "",
      task: {
        id: "",
        title: "",
        deadline: "",
        priority: "",
        status: "",
        category_id: "",
        user_id: "",
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async getTaskById() {
      try {
        this.id = this.$route.params.id;
        const resp = await this.$be_http.get(`/api/v1/task/get/` + this.id, {
          withCredentials: true,
        });
        const data = resp.data;
        this.task = {
          id: data.id,
          title: data.title,
          deadline: data.deadline,
          priority: data.priority,
          status: data.status,
          category_id: data.category_id,
          user_id: data.user_id,
        };
      } catch (error) {
        console.log(error);
      }
    },

    async updateTask(id) {
      try {
        await this.$be_http.put(`/api/v1/task/update/${id}`, this.task, {
          withCredentials: true,
        });
        this.$router.push(`/client/task`);
      } catch (error) {
        alert("Please fill in all available fields");
        console.log(error);
      }
    },
  },
  mounted() {
    console.log(VueCookies.get("session_token"));
    this.getTaskById();
  },
};
</script>

<style></style>
