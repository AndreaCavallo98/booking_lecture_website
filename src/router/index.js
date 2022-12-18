import { createRouter, createWebHistory } from "vue-router";
//import Index from "@/views/pages/frontend/home/Index/index";

import Homepage from "@/views/Homepage.vue";
import Teachers from "@/views/Teachers.vue";
import TeacherDetails from "@/views/TeacherDetails.vue";

const routes = [
  {
    name: "homepage",
    path: "/",
    component: Homepage,
  },
  {
    name: "teachers",
    path: "/teachers",
    component: Teachers,
  },
  {
    name: "teacher",
    path: "/teacher/:id",
    component: TeacherDetails,
  },
  {
    name: "bookings",
    path: "/bookings",
    component: Homepage,
  },
  {
    name: "profile",
    path: "/profile",
    component: Homepage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
});

export default router;
