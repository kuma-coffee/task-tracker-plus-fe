import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/main/index.vue";
import Login from "../views/auth/login.vue";
import Register from "../views/auth/register.vue";
import Dashboard from "../views/main/dashboard.vue";
import Task from "../views/main/task.vue";
import TaskUpdate from "../views/main/task_update.vue";
import TaskCategory from "../views/main/task_category.vue";
import Category from "../views/main/category.vue";
import CategoryUpdate from "../views/main/category_update.vue";
import Modal from "../views/modals/modals.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index,
  },
  {
    path: "/client/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/client/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/client/dashboard/",
    name: "Dashboard",
    component: Dashboard,
    props: true,
  },
  {
    path: "/client/task",
    name: "Task",
    component: Task,
    props: true,
  },
  {
    path: "/client/task/update/:id",
    name: "Task Update",
    component: TaskUpdate,
    props: true,
  },
  {
    path: "/client/task/category/:id",
    name: "Task Category",
    component: TaskCategory,
    props: true,
  },
  {
    path: "/client/category",
    name: "Category",
    component: Category,
    props: true,
  },
  {
    path: "/client/category/update/:id",
    name: "Category Update",
    component: CategoryUpdate,
    props: true,
  },
  {
    path: "/client/modal",
    name: "Modal",
    component: Modal,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
