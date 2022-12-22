<template>
  <section class="section section-features">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="section section-specialities">
            <div class="container-fluid">
              <div class="section-header text-center aos" data-aos="fade-up">
                <h2 style="color: #d68325">What you want to learn?</h2>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-9 aos" data-aos="fade-up">
                  <!-- Slider -->
                  <div class="specialities-slider slider">
                    <!-- Slider Item -->
                    <router-link
                      :to="{ name: 'teachers', query: { courseid: course.id } }"
                      tag="div"
                      class="speicality-item text-center"
                      v-for="course in courses"
                      :key="course.id"
                    >
                      <div
                        class="speicality-img"
                        :style="{ backgroundColor: '#' + course.color }"
                      >
                        <i
                          class="fa fa-book"
                          style="
                            padding-top: 45px;
                            size: 100px;
                            font-size: 60px;
                            color: white;
                          "
                        ></i>
                      </div>
                      <p>{{ course.title }}</p>
                    </router-link>
                    <!-- /Slider Item -->
                  </div>
                  <!-- /Slider -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      courses: [],
    };
  },
  mounted() {},
  async created() {
    await axios
      .get("http://localhost:8080/Prenotazioni0_war_exploded/ServletCourse")
      .then((response) => {
        this.courses = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if ($(".specialities-slider").length > 0) {
      $(".specialities-slider").slick({
        dots: false,
        autoplay: true,
        infinite: true,
        variableWidth: true,
        draggable: false,
        autoplaySpeed: 2000,
      });
    }
  },
};
</script>
