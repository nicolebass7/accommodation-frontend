import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Agreement from "./views/AgreementPage.vue";
import AdminAccomList from "./views/AdminAccomList.vue";
import ViewRequest from "./views/ViewRequest.vue";
import Accommodations from "./views/AccommodationsBackground.vue";
import request from "./views/newRequest.vue";

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
      path: "/agreement",
      name: "agreement",
      component: Agreement,
      
    },
    {
      path: "/AccommodationsBackground",
      name: "Accommodations Background",
      component: Accommodations,
    },
    {
      path: "/request",
      name: "request",
      component: request,
    },
    
  ],   
  
});

export default router;