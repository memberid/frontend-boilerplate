import Vue from "vue";
import VueRouter from "vue-router";
import Member from "@/modules/member/routes";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    redirect:"/member"
  },
  Member
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
