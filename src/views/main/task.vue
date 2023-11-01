<template>
  <div class="min-h-full">
    <Navbar />

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
              Add New Task
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              class="space-y-6"
              action="/client/task/add/process"
              method="POST"
            >
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
                  Add Task
                </button>
              </div>
            </form>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="flex justify-between">
              <div></div>
              <details
                class="dropdown flex w-48 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <summary class="m-1 btn">Filter by Category</summary>
                <ul v-for="category in categories" :key="category.id">
                  <li>
                    <a
                      href="/client/task/category/{{category.id}}"
                      class="block px-4 py-2 rounded-md hover:bg-white dark:hover:bg-white dark:hover:text-black"
                    >
                      {{ category.name }}
                    </a>
                  </li>
                </ul>
              </details>
            </div>
            <ul
              v-for="task in tasks"
              :key="task.id"
              role="list"
              class="divide-y divide-gray-100"
            >
              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex gap-x-4">
                  <img
                    class="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src="https://cdn0.iconfinder.com/data/icons/logistics-delivery-colored-2/128/32-512.png"
                    alt=""
                  />
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">
                      {{ task.title }}
                    </p>
                    <p class="mt-1 truncate text-xs leading-5 text-gray-500">
                      Priority: {{ task.priority }}
                    </p>
                    <div class="flex">
                      <div>
                        <a
                          href="task/update/{{task.id}}"
                          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >Edit</a
                        >
                      </div>
                      <form
                        action="task/delete/process/{{task.id}}"
                        method="post"
                        class="mx-1"
                      >
                        <div>
                          <button
                            type="submit"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Delete
                          </button>
                        </div>
                      </form>

                      <!-- <div class="mx-1">
                          <a
                            href="task/delete/process/{{task.id}}"
                            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >Delete</a
                          >
                        </div> -->
                    </div>
                  </div>
                </div>
                <div class="hidden sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900">
                    CategoryID: <strong>{{ task.category_id }}</strong> UserID:
                    <strong>{{ task.user_id }}</strong>
                  </p>
                  <p class="mt-1 text-xs leading-5 text-gray-500">
                    Deadline <time>{{ task.deadline }}</time>
                  </p>
                  <div class="mt-1 flex items-center gap-x-1.5">
                    <div
                      v-if="task.status === 'Completed'"
                      class="flex-none rounded-full bg-emerald-500/20 p-1"
                    >
                      <div
                        class="h-1.5 w-1.5 rounded-full bg-emerald-500"
                      ></div>
                    </div>
                    <div
                      v-else-if="task.status === 'In Progress'"
                      class="flex-none rounded-full bg-yellow-500/20 p-1"
                    >
                      <div class="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                    </div>
                    <div
                      v-else
                      class="flex-none rounded-full bg-gray-500/20 p-1"
                    >
                      <div class="h-1.5 w-1.5 rounded-full bg-gray-500"></div>
                    </div>
                    <p class="text-xs leading-5 text-gray-500">
                      {{ task.status }}
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "../../components/navbar.vue";

export default {
  data() {
    return {
      email: "",
      tasks: [],
      categories: [],
    };
  },
  components: {
    Navbar,
  },
  method: {
    async getTaskList() {
      await this.$be_http.get(`/api/v1/task/list`).then((resp) => {
        this.tasks = [];
        resp.data.data.tasks.forEach((element) => {
          this.tasks.push({
            id: element.id,
            title: element.title,
            deadline: element.deadline,
            priority: element.priority,
            status: element.status,
            category_id: element.category_id,
            user_id: element.user_id,
          });
        });
      });
    },
    async getCategoryList() {
      await this.$be_http.get(`/api/v1/category/list`).then((resp) => {
        this.categories = [];
        resp.data.data.categories.forEach((element) => {
          this.categories.push({
            id: element.id,
            name: element.name,
          });
        });
      });
    },
  },
  mounted() {
    this.getTaskList();
    this.getCategoryList();
  },
};
</script>

<style></style>
