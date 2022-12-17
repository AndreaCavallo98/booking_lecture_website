<template>
  <!-- Home Banner -->
  <section class="section section-search">
    <div class="container-fluid">
      <div class="banner-wrapper">
        <div class="banner-header text-center aos" data-aos="fade-up">
          <h1 style="color: #ffffff">Search Teacher, Make your mum happy!</h1>
          <p style="color: #ffffff">
            Choose the subject you want to learn and we will suggest experienced
            teachers who are right for you. Select the teacher according to your
            needs
          </p>
        </div>

        <!-- Search -->
        <div class="search-box aos" data-aos="fade-up">
          <form>
            <div class="form-group search-info">
              <input
                type="text"
                class="form-control"
                placeholder="Search Courses, Teacher..."
              />
              <span
                class="form-text"
                style="color: #ffffff; padding-bottom: 50px"
                >Ex : Math, English or Teacher name - surname etc</span
              >
            </div>
            <router-link to="/search">
              <button type="submit" class="btn btn-primary search-btn mt-0">
                <i class="fas fa-search"></i> <span>Search</span>
              </button>
            </router-link>
          </form>
        </div>
        <!-- /Search -->
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>

<script>
export default {
  name: "Banner",
};
</script>
