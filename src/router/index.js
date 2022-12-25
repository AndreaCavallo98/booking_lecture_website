import { createRouter, createWebHistory } from "vue-router";
//import Index from "@/views/pages/frontend/home/Index/index";
import useUserStore from "@/stores/user";

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
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "mybookings",
    path: "/mybookings",
    component: MyBookings,
    meta: {
      requiresAuth: true,
    },
  },
  {
    name: "admin",
    path: "/admin",
    component: Admin,
    meta: {
      requiresAdmin: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  // console.log("Global Guard");
  const store = useUserStore();

  if (!to.meta.requiresAuth && !to.meta.requiresAdmin) {
    next();
    return;
  } else if (to.meta.requiresAuth) {
    if (store.userLoggedIn) {
      next();
    } else {
      next({ name: "homepage" });
    }
  } else if (to.meta.requiresAdmin) {
    if (store.userLoggedIn && store.userRole == "admin") {
      next();
    } else {
      next({ name: "homepage" });
    }
  }
});

export default router;
