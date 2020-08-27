export default {
  path: "/",
  component: () => import("@/components/layout/LayoutClear"),
  children: [{
    path: "",
    name: "Login",
    meta: {
      isPublicAccess: true
    },
    component: () => import("../pages/LoginPage.vue")
  }]
};