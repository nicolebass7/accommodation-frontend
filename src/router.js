import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Agreement from "./views/AgreementPage.vue";
import Academic from "./views/Academic.vue";
import Chapel from "./views/Chapel.vue";
import Housing from "./views/Housing.vue";
import MealPlan from "./views/MealPlan.vue";

import AdminAccomList from "./views/AdminAccomList.vue";
import ViewRequest from "./views/ViewRequest.vue";
import Accommodations from "./views/AccommodationsBackground.vue";



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
      path: "/adminAccomList",
      name: "AdminAccomList",
      component: AdminAccomList,

    },
    {
      path: "/viewRequest/:id",
      name: "ViewRequest",
      component: ViewRequest,
      props: true,
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
  
    {
      path: "/agreement",
      name: "agreement",
      component: Agreement,
    },
    {
      path: "/AccommodationsBackground",
      name: "Accommodations Background",
      component: Accommodations,
    },
    
  ],
});

export default router;
