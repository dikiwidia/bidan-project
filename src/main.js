import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { addIcons, OhVueIcon } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
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
  history: createWebHistory("/bidan-project"),
  routes: routes,
});

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
