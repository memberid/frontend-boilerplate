import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/modules/login/routes";
import Admin from "@/modules/admin/routes";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: {
      name: 'Login'
    }
  },
  Login,
  Admin
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;