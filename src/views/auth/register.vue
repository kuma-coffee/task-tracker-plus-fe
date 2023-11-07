<template>
  <!-- beginanswer -->
  <div
    class="flex items-center justify-center min-h-screen bg-cover"
    style="
      background-image: url('https://images.unsplash.com/photo-1684560208006-274881cc4c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80');
    "
  >
    <div
      class="w-full max-w-md px-8 py-10 mt-4 text-left bg-white shadow-lg rounded-lg"
    >
      <h3 class="text-2xl font-bold text-center">Register account</h3>
      <form method="POST" @submit.prevent="onSubmit">
        <div>
          <div class="mt-4">
            <div>
              <label class="block" for="fullname">Fullname</label>
              <input
                type="text"
                placeholder="fullname"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="fullname"
                v-model="user.fullname"
              />
            </div>
            <div class="mt-4">
              <label class="block" for="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="email"
                v-model="user.email"
              />
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="password"
                v-model="user.password"
              />
            </div>
            <div class="flex items-baseline justify-between">
              <button
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Register
              </button>
              <a
                href="/client/login"
                class="text-sm text-blue-600 hover:underline"
                >Login</a
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- endanswer -->
</template>

<script>
export default {
  data() {
    return {
      user: {
        fullname: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        await this.$be_http.post(`/api/v1/user/register`, {
          fullname: this.user.fullname,
          email: this.user.email,
          password: this.user.password,
        });

        this.$router.push(`/client/login`);
      } catch (error) {
        this.$router.push(`/client/modal?status=error&message=${error}`);
      }
    },
  },
};
</script>

<style></style>
