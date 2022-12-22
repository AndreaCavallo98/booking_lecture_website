<template>
  <div class="main-wrapper">
    <!-- Breadcrumb -->
    <div class="breadcrumb-bar">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-12 col-12">
            <nav aria-label="breadcrumb" class="page-breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <router-link to="/">Homepage</router-link>
                </li>
                <li class="breadcrumb-item" aria-current="page">
                  <router-link :to="{ name: 'teachers' }">Teachers</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {{ teacher.name }} {{ teacher.surname }}
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">Teacher Details</h2>
          </div>
        </div>
      </div>
    </div>
    <!-- /Breadcrumb -->

    <!-- Page Content -->
    <div class="content">
      <div class="container">
        <!-- Doctor Widget -->
        <div class="card">
          <div class="card-body">
            <div class="doctor-widget">
              <div class="doc-info-left">
                <div class="doctor-img">
                  <img
                    src="@/assets/img/teachers/nofototeacher.png"
                    class="img-fluid"
                    alt="User Image"
                  />
                </div>
                <div class="doc-info-cont">
                  <h4 class="doc-name">
                    {{ teacher.name }} {{ teacher.surname }}
                  </h4>
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
                <div v-if="userLoggedIn" class="clinic-booking">
                  <router-link
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
            <div class="widget about-widget">
              <h4 class="widget-title">About Me</h4>
              <p>
                {{ teacher.description }}
              </p>
            </div>
          </div>
        </div>
        <!-- /Doctor Widget -->

        <!-- Doctor Details Tab -->
        <div class="card">
          <div class="card-body pt-0">
            <!-- Tab Menu -->
            <nav class="user-tabs mb-4">
              <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    href="#doc_reviews"
                    data-bs-toggle="tab"
                    >Reviews</a
                  >
                </li>
              </ul>
            </nav>
            <!-- /Tab Menu -->

            <!-- Tab Content -->
            <div class="tab-content pt-0">
              <!-- Reviews Content -->
              <div
                role="tabpanel"
                id="doc_reviews"
                class="tab-pane fade active show"
              >
                <!-- Review Listing -->
                <div class="widget review-listing">
                  <h3 v-if="reviews.length == 0">
                    No reviews yet for this teacher..
                  </h3>
                  <ul v-if="reviews.length != 0" class="comments-list">
                    <!-- Comment List -->
                    <li v-for="review in reviews" :key="review.id">
                      <div class="comment">
                        <img
                          class="avatar avatar-sm rounded-circle"
                          alt="User Image"
                          src="@/assets/img/teachers/nofototeacher.png"
                        />
                        <div class="comment-body">
                          <div class="meta-data">
                            <span class="comment-author"
                              >{{ review.user_name }}
                              {{ review.user_surname }}</span
                            >
                            <span class="comment-date"
                              >Date {{ review.creation_date }}</span
                            >
                            <div class="review-count rating mapgridrating">
                              <i
                                v-for="n in Math.round(review.rate)"
                                class="fas fa-star filled"
                              ></i>
                              <i
                                v-for="n in 5 - Math.round(review.rate)"
                                class="fas fa-star"
                              ></i>
                            </div>
                          </div>
                          <p class="recommended">
                            {{ review.title }}
                          </p>
                          <p class="comment-content">
                            {{ review.text }}
                          </p>
                        </div>
                      </div>
                    </li>
                    <!-- /Comment List -->
                  </ul>
                </div>
                <!-- /Review Listing -->
              </div>
              <!-- /Reviews Content -->
            </div>
          </div>
        </div>
        <!-- /Doctor Details Tab -->
      </div>
    </div>
    <!-- /Page Content -->
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  mounted() {},
  data() {
    return {
      teacher: null,
      reviews: [],
    };
  },
  async created() {
    await axios
      .get(
        "http://localhost:8080/Prenotazioni0_war_exploded/ServletTeacher?type=teacherdetail&id=" +
          this.$route.params.id
      )
      .then((response) => {
        if (response.data == null) {
          this.$router.push({ path: "/" });
          return;
        }
        this.teacher = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        "http://localhost:8080/Prenotazioni0_war_exploded/ServletReview?idteacher=" +
          this.$route.params.id
      )
      .then((response) => {
        this.reviews = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    ...mapState(useUserStore, ["userLoggedIn"]),
  },
};
</script>
