import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";

import Academic from "./views/Academic.vue";
import Chapel from "./views/Chapel.vue";
import Housing from "./views/Housing.vue";
import MealPlan from "./views/MealPlan.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/accommodation/academic",
      name: "academic",
      component: Academic,
    },
    {
      path: "/accommodation/chapel",
      name: "chapel",
      component: Chapel,
    },
    {
      path: "/accommodation/housing",
      name: "housing",
      component: Housing,
    },
    {
      path: "/accommodation/MealPlan",
      name: "mealPlan",
      component: MealPlan,
    },
  ],
});

export default router;
