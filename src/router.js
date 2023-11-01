import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Agreement from "./views/AgreementPage.vue";
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
      path: "/request",
      name: "request",
      component: request,
    },
    
  ],
    
    
  
});

export default router;
