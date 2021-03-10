export default [
  {
    path: "/",
    component: () => import("../components/Main"),
    redirect: "home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("../views/Home.vue"),
        meta: {
          title: "首页",
        },
      },
      {
        path: "Button",
        name: "Button",
        component: () => import("../views/Button_test.vue"),
        meta: {
          title: "Button组件",
        },
      },
      {
        path: "Input",
        name: "Input",
        component: () => import("../views/Input_test.vue"),
        meta: {
          title: "Input组件",
        },
      },
    ],
  },
];
