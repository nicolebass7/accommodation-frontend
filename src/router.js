import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Agreement from "./views/AgreementPage.vue";
import Accommodations from "./views/AccommodationsBackground.vue";
import studentRequest from "./views/studentRequest.vue";
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
      path: "/student",
      name: "student",
      component: studentRequest,
    },
    {
      path: "/request",
      name: "request",
      component: request,
    },
    
  ],
    
    
  
});

export default router;