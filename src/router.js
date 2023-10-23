import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Agreement from "./views/AgreementPage.vue";
import Academic from "./views/Academic.vue";
import Chapel from "./views/Chapel.vue";
import Housing from "./views/Housing.vue";
import MealPlan from "./views/MealPlan.vue";


import TutorialsList from "./views/TutorialsList.vue";
import EditTutorial from "./views/EditTutorial.vue";
import newRequest from "./views/newRequest.vue";
import ViewTutorial from "./views/ViewTutorial.vue";
import AddLesson from "./views/AddLesson.vue";
import EditLesson from "./views/EditLesson.vue";

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
      path: "/request",
      name: "request",
      component: newRequest,
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
