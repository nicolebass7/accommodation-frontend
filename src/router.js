import { createRouter, createWebHistory } from "vue-router";

import Login from "./views/Login.vue";
import Agreement from "./views/AgreementPage.vue";
import Accommodations from "./views/AccommodationsBackground.vue";
//import {Role} from "./role.js";
//import {authenticationService} from "./services";


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
      //meta: { authorize: [Role.User] }
    },
    {
      path: "/AccommodationsBackground",
      name: "Accommodations Background",
      component: Accommodations,
    },
    
  ],
    
    
  
});

export default router;

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  const currentUser = authenticationService.currentUserValue;

  if (authorize) {
      if (!currentUser) {
          // not logged in so redirect to login page with the return url
          return next({ path: '/login', query: { returnUrl: to.path } });
      }

      // check if route is restricted by role
      if (authorize.length && !authorize.includes(currentUser.role)) {
          // role not authorised so redirect to home page
          return next({ path: '/' });
      }
  }

  next();
})
