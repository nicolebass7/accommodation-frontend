import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Agreement from "./views/AgreementPage.vue";
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
      name: "Academic",
      component: Academic,

    },
    {
      path: "/accommodation/chapel",
      name: "Chapel",
      component: Chapel,
    },
    {
      path: "/accommodation/housing",
      name: "Housing",
      component: Housing,
    },
    {
      path: "/accommodation/MealPlan",
      name: "MealPlan",
      component: MealPlan,
    },
  ],
      path: "/agreement",
      name: "agreement",
      component: Agreement,
    },
  ],
});

export default router;
