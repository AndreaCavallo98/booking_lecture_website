<template>
  <div class="main-wrapper">
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-8 col-12">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Homepage</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Teachers
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">
              {{ filteredTeacher.length }} teachers found
            </h2>
          </div>
          <div class="col-md-4 col-12 d-md-block d-none"></div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickyside">
              <search-sidebar
                :maxHoyrlyRate="maxHoyrlyRate"
                :changeFilters="changeFilters"
              ></search-sidebar>
            </div>
          </div>

          <div class="col-md-12 col-lg-8 col-xl-9">
            <!-- Doctor Widget -->
            <div
              class="card"
              v-for="teacher in filteredTeacher"
              :key="teacher.id"
            >
              <div class="card-body">
                <div class="doctor-widget">
                  <div class="doc-info-left">
                    <div class="doctor-img">
                      <router-link
                        :to="{
                          name: 'teacher',
                          params: { id: teacher.id },
                        }"
                      >
                        <img
                          src="@/assets/img/teachers/nofototeacher.png"
                          class="img-fluid"
                          alt="User Image"
                        />
                      </router-link>
                    </div>
                    <div class="doc-info-cont">
                      <h4 class="doc-name">
                        <router-link
                          :to="{
                            name: 'teacher',
                            params: { id: teacher.id },
                          }"
                        >
                          {{ teacher.name }} {{ teacher.surname }}
                        </router-link>
                      </h4>
                      <p class="doc-speciality">{{ teacher.description }}</p>
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
                      <p>Teached courses</p>
                      <p>
                        <button
                          v-for="course in teacher.teached_courses"
                          :key="course.id"
                          type="button"
                          class="btn btn-sm me-1"
                          :style="{ backgroundColor: '#' + course.color }"
                        >
                          {{ course.title }}
                        </button>
                      </p>
                    </div>
                  </div>
                  <div class="doc-info-right">
                    <div class="clini-infos">
                      <ul>
                        <li>
                          <i class="far fa-thumbs-up"></i>
                          {{ teacher.num_lectures_given }} lectures given
                        </li>
                        <li>
                          <i class="far fa-comment"></i>
                          {{ teacher.num_reviews }} reviews
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i>
                          {{ teacher.hourly_rate }} €/ hour
                        </li>
                      </ul>
                    </div>
                    <div class="clinic-booking">
                      <router-link
                        class="view-pro-btn"
                        :to="{
                          name: 'teacher',
                          params: { id: teacher.id },
                        }"
                        >View Profile</router-link
                      >
                      <router-link
                        v-if="userLoggedIn"
                        class="apt-btn"
                        :to="{
                          name: 'book',
                          params: { id: teacher.id },
                        }"
                        >Book Appointment</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /Doctor Widget -->
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "pinia";
import useUserStore from "@/stores/user";
import SearchSidebar from "@/components/SearchSidebar.vue";

export default {
  name: "Teahers",
  components: {
    SearchSidebar,
  },
  data() {
    return {
      teachers: [],
      maxHoyrlyRate: 100,

      filterSearchText: "",
      filterCourse: -1,
      filterAvailabilityDate: "",
      filterMaxHourlyRate: -1,
    };
  },
  async created() {
    await this.getTeachers();
    await this.getMaxHourlyRate();
  },
  methods: {
    async changeFilters(
      filterMaxHourlyRate,
      filterSearchText,
      filterCourse,
      filterAvailabilityDate
    ) {
      if (this.filterAvailabilityDate != filterAvailabilityDate) {
        this.filterAvailabilityDate = filterAvailabilityDate;
        await this.getTeachers();
      }

      this.filterMaxHourlyRate = filterMaxHourlyRate;
      this.filterSearchText = filterSearchText;
      this.filterCourse = filterCourse;
    },
    async getTeachers() {
      await axios
        .get(
          "http://127.0.0.1:8080/Prenotazioni0_war_exploded/ServletTeacher?type=all&courseid=-1&avaliabledate=" +
            this.filterAvailabilityDate +
            "&maxhourlyrate=0"
        )
        .then((response) => {
          this.teachers = response.data;
          if (this.$route.query.courseid != null) {
            this.filterCourse = Number(this.$route.query.courseid);
          }
          if (this.$route.query.search != null) {
            this.filterSearchText = this.$route.query.search;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async getMaxHourlyRate() {
      await axios
        .get(
          "http://localhost:8080/Prenotazioni0_war_exploded/ServletTeacher?type=maxhourlyrate"
        )
        .then((response) => {
          this.maxHoyrlyRate = Number(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    ...mapState(useUserStore, ["userLoggedIn"]),
    filteredTeacher() {
      return this.teachers
        .filter((teacher) => {
          return this.filterMaxHourlyRate == -1
            ? true
            : teacher.hourly_rate <= this.filterMaxHourlyRate;
        })
        .filter((teacher) => {
          return this.filterSearchText == ""
            ? true
            : teacher.name
                .toLowerCase()
                .includes(this.filterSearchText.toLowerCase()) ||
                teacher.surname
                  .toLowerCase()
                  .includes(this.filterSearchText.toLowerCase()) ||
                teacher.teached_courses.some((el) => {
                  return el.title
                    .toLowerCase()
                    .includes(this.filterSearchText.toLowerCase());
                });
        })
        .filter((teacher) => {
          return this.filterCourse == "-1"
            ? true
            : teacher.teached_courses.some((el) => el.id == this.filterCourse);
        });
    },
  },
};
</script>
