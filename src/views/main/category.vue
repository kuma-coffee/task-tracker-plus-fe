<template>
  <div class="min-h-full">
    <Navbar :email="this.email" />

    <header class="bg-white shadow">
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">
          Category
        </h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
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
              Add New Category
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              class="space-y-6"
              @submit.prevent="addCategory()"
              method="POST"
            >
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Name</label
                >
                <div class="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    v-model="form.name"
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
                  Add Category
                </button>
              </div>
            </form>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <ul
              v-for="category in categories"
              :key="category.id"
              role="list"
              class="divide-y divide-gray-100"
            >
              <li class="flex items-center justify-between gap-x-6 py-5">
                <div class="flex gap-x-4">
                  <img
                    class="h-12 w-12 rounded-full bg-gray-50"
                    src="https://cdn0.iconfinder.com/data/icons/logistics-delivery-colored-2/128/32-512.png"
                    alt=""
                  />
                  <div class="min-w-0 flex-auto">
                    <p class="text-sm font-semibold leading-6 text-gray-900">
                      {{ category.name }}
                    </p>
                    <div class="flex">
                      <div>
                        <a
                          @click="updateCategory(category.id)"
                          class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >Edit</a
                        >
                      </div>
                      <form
                        @submit.prevent="deleteCategory(category.id)"
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
                    </div>
                  </div>
                </div>
                <div class="hidden sm:flex sm:flex-col sm:items-end">
                  <p class="text-sm leading-6 text-gray-900">
                    CategoryID: <strong>{{ category.id }}</strong>
                  </p>
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
import VueCookies from "vue-cookies";

export default {
  data() {
    return {
      email: "",
      categories: [],
      form: {
        name: "",
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async getCategoryList() {
      const resp = await this.$be_http.get(`/api/v1/category/list`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${VueCookies.get("session_token")}`,
        },
      });
      this.categories = [];
      if (resp.data && Array.isArray(resp.data)) {
        this.categories = resp.data.map((element) => ({
          id: element.id,
          name: element.name,
        }));
      } else {
        console.error("Data tidak valid atau tidak ditemukan dalam respons.");
      }
    },

    async addCategory() {
      try {
        await this.$be_http.post(`/api/v1/category/add`, this.form, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${VueCookies.get("session_token")}`,
          },
        });
        await this.getCategoryList();
      } catch (error) {
        alert("Please fill in all available fields");
        console.log(error);
      }
    },

    async updateCategory(id) {
      this.$router.push(`/client/category/update/${id}`);
    },

    async deleteCategory(id) {
      await this.$be_http.delete(`/api/v1/category/delete/${id}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${VueCookies.get("session_token")}`,
        },
      });
      await this.getCategoryList();
    },
  },
  mounted() {
    this.getCategoryList();
  },
};
</script>

<style></style>
