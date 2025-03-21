import Pay4MeView from "@/views/Pay4MeView.vue";

export const pay4meRoutes = [
  {
    path: "/pay4me",
    component: () => import("@/views/ThePay4me.vue"),
    children: [
      {
        path: "",
        name: "pay4me",
        component: Pay4MeView,
      },
    ],
  },
];
