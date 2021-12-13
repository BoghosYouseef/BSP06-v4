import {createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue"
import RegistrationPage from "../views/RegistrationPage.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: 'Main Page' }
  }
  ,
  {
    path: "/user-login",
    name: "User Login",
    component: LoginPage,
    meta: { title: 'User Login Page' }
  },
  {
    path: "/user-registration",
    name: "User Registration",
    component: RegistrationPage,
    meta: { title: 'User Registration Page' }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }
  next();
});

export default router;
