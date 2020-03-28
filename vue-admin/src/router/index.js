import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redict:"/login"
  },
  {
    path: "/login",
    name: "Login",
    component: ()=>import("../views/Login/index.vue")
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

export default router;
