export default {
  path: "/member",
  meta: {
    title: "Member List",
    permission: "List Member"
  },
  component: () => import("@/modules/member/pages/ListMemberPage.vue")
};
