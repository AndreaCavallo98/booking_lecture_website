<template>
  <div class="main-wrapper">
    <app-banner></app-banner>
    <app-mobile-ads-courses></app-mobile-ads-courses>
    <app-top-five-teacher></app-top-five-teacher>
    <app-mobile-ads></app-mobile-ads>
  </div>
</template>

<script>
import AppBanner from "@/components/Homepage/Banner.vue";
import AppMobileAdsCourses from "@/components/Homepage/MobileAdsCourses.vue";
import AppTopFiveTeacher from "@/components/Homepage/TopFiveTeacher.vue";
import AppMobileAds from "@/components/Homepage/MobileAds.vue";

export default {
  name: "Homepage",
  components: {
    AppBanner,
    AppMobileAdsCourses,
    AppTopFiveTeacher,
    AppMobileAds,
  },
};
</script>
