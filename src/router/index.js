import { createRouter, createWebHistory } from "vue-router";
//import Index from "@/views/pages/frontend/home/Index/index";

import Homepage from "@/views/Homepage.vue";
import Teachers from "@/views/Teachers.vue";
import TeacherDetails from "@/views/TeacherDetails.vue";
import BookLecture from "@/views/BookLecture.vue";
import MyBookings from "@/views/MyBookings.vue";
import Admin from "@/views/Admin.vue";

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
    name: "book",
    path: "/book/:id",
    component: BookLecture,
  },
  {
    name: "mybookings",
    path: "/mybookings",
    component: MyBookings,
  },
  {
    name: "admin",
    path: "/admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
});

export default router;
