<template>
  <!-- Popular Section -->
  <section class="section section-doctor">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-4">
          <div class="section-header aos" data-aos="fade-up">
            <h2 style="color: #d68325">Top 5 reviewed teacher</h2>
            <p>Learn from the best teachers!</p>
          </div>
          <div class="about-content aos" data-aos="fade-up">
            <p>
              Select the teacher who is right for you based on his or her
              previous experience. Our users can write verified reviews to
              evaluate the work done. They will help you decide who to trust for
              your best learning
            </p>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="doctor-slider slider aos" data-aos="fade-up">
            <!-- Doctor Widget -->
            <div
              class="profile-widget"
              v-for="teacher in topFiveTeachers"
              :key="teacher.id"
            >
              <div class="doc-img">
                <router-link
                  :to="{
                    name: 'teacher',
                    params: { id: teacher.id },
                  }"
                >
                  <img
                    class="img-fluid"
                    alt="User Image"
                    src="@/assets/img/teachers/nofototeacher.png"
                  />
                </router-link>
              </div>
              <div class="pro-content">
                <h3 class="title">
                  <router-link
                    :to="{
                      name: 'teacher',
                      params: { id: teacher.id },
                    }"
                    >{{ teacher.name }} {{ teacher.surname }}</router-link
                  >
                  <i class="fas fa-check-circle verified"></i>
                </h3>
                <!--<p class="speciality">{{ item.name1 }}</p>-->
                <div class="rating mapgridrating">
                  <i
                    v-for="n in Math.round(teacher.reviews_average)"
                    class="fas fa-star filled"
                  ></i>
                  <i
                    v-for="n in 5 - Math.round(teacher.reviews_average)"
                    class="fas fa-star"
                  ></i>
                  <span class="d-inline-block average-rating"
                    >({{ teacher.num_reviews }})</span
                  >
                </div>
                <ul class="available-info">
                  <li>
                    <i class="far fa-thumbs-up"></i>
                    {{ teacher.num_lectures_given }} lectures given
                  </li>
                  <!--<li><i class="far fa-clock"></i> {{ item.date }}</li>-->
                  <li>
                    <i class="far fa-money-bill-alt"></i>
                    {{ teacher.hourly_rate }} € / hour
                    <i
                      class="fas fa-info-circle"
                      data-bs-toggle="tooltip"
                      title="Lorem Ipsum"
                    ></i>
                  </li>
                </ul>
                <p>
                  <button
                    v-for="course in teacher.teached_courses"
                    :key="course.id"
                    type="button"
                    class="btn btn-sm me-1"
                    :style="{
                      backgroundColor: '#' + course.color,
                      padding: '0.1rem',
                      fontSize: '11px',
                    }"
                  >
                    {{ course.title }}
                  </button>
                </p>
                <div class="row row-sm">
                  <div class="col">
                    <router-link
                      :to="{
                        name: 'teacher',
                        params: { id: teacher.id },
                      }"
                      class="btn view-btn"
                      >View Profile</router-link
                    >
                  </div>
                  <div v-if="userLoggedIn" class="col">
                    <router-link
                      :to="{
                        name: 'book',
                        params: { id: teacher.id },
                      }"
                      class="btn book-btn"
                      >Book Now</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
            <!-- /Doctor Widget -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Popular Section -->
</template>
<script>
import axios from "axios";
import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  data() {
    return {
      topFiveTeachers: [],
    };
  },
  async created() {
    await axios
      .get(
        "http://127.0.0.1:8080/Prenotazioni0_war_exploded/ServletTeacher?type=topfive&courseid=-1&avaliabledate=&maxhourlyrate=0"
      )
      .then((response) => {
        this.topFiveTeachers = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    if ($(".doctor-slider").length > 0) {
      $(".doctor-slider").slick({
        dots: false,
        autoplay: false,
        infinite: false,
        variableWidth: true,
      });
    }
  },
  computed: {
    ...mapState(useUserStore, ["userLoggedIn"]),
  },
  methods: {},
};
</script>
