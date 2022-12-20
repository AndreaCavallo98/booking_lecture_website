<template>
  <!-- Header -->
  <header class="header">
    <nav class="navbar navbar-expand-lg header-nav">
      <div class="navbar-header">
        <a id="mobile_btn" href="javascript:void(0);">
          <span class="bar-icon bar-icon-one">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </a>
        <router-link to="/" class="navbar-brand logo">
          <h5>BOOKING LECTURE</h5>
          <!--<img
              src="../../../assets/img/logo.png"
              class="img-fluid"
              alt="Logo"
            />-->
        </router-link>
      </div>
      <div class="main-menu-wrapper">
        <div class="menu-header">
          <router-link to="/" class="menu-logo">
            <h5>BOOKING LECTURE</h5>
            <!--<img
              src="../../../assets/img/logo.png"
              class="img-fluid"
              alt="Logo"
            />-->
          </router-link>
          <a id="menu_close" class="menu-close" href="javascript:void(0);">
            <i class="fas fa-times"></i>
          </a>
        </div>
        <ul class="main-nav">
          <li :class="currentPath == 'index' ? 'active' : 'notactive'">
            <router-link :to="{ name: 'homepage' }">Home</router-link>
          </li>
          <li :class="currentPath == 'index' ? 'active' : 'notactive'">
            <router-link :to="{ name: 'teachers' }">Teachers</router-link>
          </li>
          <template v-if="userLoggedIn">
            <li :class="currentPath == 'index' ? 'active' : 'notactive'">
              <router-link :to="{ name: 'bookings' }">My Bookings</router-link>
            </li>
            <li :class="currentPath == 'index' ? 'active' : 'notactive'">
              <router-link :to="{ name: 'profile' }">Profile</router-link>
            </li>
          </template>
          <li v-if="userRole == 'admin'" class="has-submenu">
            <a href="javascript:void(0);" target="_blank"
              >Admin <i class="fas fa-chevron-down"></i
            ></a>
            <ul class="submenu">
              <li>
                <router-link to="/admin/login" target="_blank"
                  >Manage courses</router-link
                >
              </li>
              <li>
                <router-link to="/pharmacyadmin/login" target="_blank"
                  >Manage teachers</router-link
                >
              </li>
              <li>
                <router-link to="/pharmacyadmin/login" target="_blank"
                  >Manage bookings</router-link
                >
              </li>
            </ul>
          </li>
          <!--<li class="has-submenu">
            <a href="javascript:void(0);" target="_blank"
              >Admin <i class="fas fa-chevron-down"></i
            ></a>
            <ul class="submenu">
              <li>
                <router-link to="/admin/login" target="_blank"
                  >Admin</router-link
                >
              </li>
              <li>
                <router-link to="/pharmacyadmin/login" target="_blank"
                  >Pharmacy Admin</router-link
                >
              </li>
            </ul>
          </li>-->
        </ul>
      </div>
      <ul class="nav header-navbar-rht">
        <li v-if="!userLoggedIn" class="nav-item">
          <a
            href="javascript:void(0);"
            class="nav-link header-login btn-one-light"
            data-bs-toggle="modal"
            data-bs-target="#add_event"
            >login / Signup</a
          >
        </li>
        <li @click.prevent="signOut" v-else class="nav-item">
          <a class="nav-link header-login btn-one-light">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
  <!-- /Header -->
</template>

<script>
import { mapState, mapActions } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "AppHeader",
  computed: {
    ...mapState(useUserStore, ["userLoggedIn", "userRole"]),
    currentPath() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
    signOut() {
      this.logout();
    },
  },
};
</script>
