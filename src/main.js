import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";
import MainLayout from "./components/Layouts/MainLayout.vue";
import AuthLayout from "./components/Layouts/AuthLayout.vue";

const app = createApp(App);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    component: MainLayout,
    // meta: { requireAuth: true },
  },
  {
    path: "/login",
    name: "AuthLayout",
    component: AuthLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

app.use(router);
app.mount("#app");
