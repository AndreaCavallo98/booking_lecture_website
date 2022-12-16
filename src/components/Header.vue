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
          <img
            src="../../../assets/img/logo.png"
            class="img-fluid"
            alt="Logo"
          />
        </router-link>
      </div>
      <div class="main-menu-wrapper">
        <div class="menu-header">
          <router-link to="/" class="menu-logo">
            <img
              src="../../../assets/img/logo.png"
              class="img-fluid"
              alt="Logo"
            />
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
          <li :class="currentPath == 'index' ? 'active' : 'notactive'">
            <router-link :to="{ name: 'bookings' }">My Bookings</router-link>
          </li>
          <li :class="currentPath == 'index' ? 'active' : 'notactive'">
            <router-link :to="{ name: 'profile' }">Profile</router-link>
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
          <li class="login-link">
            <router-link to="/login">Login / Signup</router-link>
          </li>
        </ul>
      </div>
      <ul class="nav header-navbar-rht">
        <li class="nav-item contact-item">
          <div class="header-contact-img">
            <i class="far fa-hospital"></i>
          </div>
          <div class="header-contact-detail">
            <p class="contact-header">Contact</p>
            <p class="contact-info-header">+1 315 369 5943</p>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link header-login btn-one-light" to="/login"
            >login / Signup
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <!-- /Header -->
</template>

<script>
export default {
  name: "AppHeader",
  computed: {
    currentPath() {
      return this.$route.name;
    },
  },
};
</script>
