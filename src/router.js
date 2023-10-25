import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Agreement from "./views/AgreementPage.vue";
import TutorialList from "./views/TutorialsList.vue";


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
      path: "/tutorials",
      name: "tutorials",
      component: TutorialList,
    }
    
  ],
    
    
  
});

export default router;
