export default {
  path: "/admin",
  component: () => import("@/components/layout/LayoutBase"),
  children: [{
    path: "",
    name: "admin",
    meta: {
      title: "Admin List",
      subject: "Admin",
      action: "read",
      generatorName: "Admin"
    },
    component: () => import("../pages/ListAdminPage.vue")
  }]
};