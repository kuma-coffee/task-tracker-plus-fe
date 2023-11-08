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
              Update Category
            </h2>
          </div>

          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              class="space-y-6"
              @submit.prevent="updateCategory(category.id)"
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
                    v-model="category.id"
                    readonly
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

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
                    v-model="category.name"
                    autocomplete="name"
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
                  Update Category
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

export default {
  data() {
    return {
      id: null,
      email: "",
      category: {
        id: "",
        name: "",
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    async getCategoryById() {
      try {
        this.id = this.$route.params.id;
        const resp = await this.$be_http.get(
          `/api/v1/category/get/${this.id}`,
          {
            withCredentials: true,
          }
        );
        const data = resp.data;
        this.category = {
          id: data.id,
          name: data.name,
        };
      } catch (error) {
        console.log(error);
      }
    },

    async updateCategory(id) {
      try {
        await this.$be_http.put(
          `/api/v1/category/update/${id}`,
          this.category,
          {
            withCredentials: true,
          }
        );
        this.$router.push(`/client/category`);
      } catch (error) {
        alert("Please fill in all available fields");
        console.log(error);
      }
    },
  },
  mounted() {
    this.getCategoryById();
  },
};
</script>

<style></style>
