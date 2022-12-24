<template>
  <!-- Home Banner -->

  <div class="home-one-banner">
    <div class="bg-shapes">
      <img
        src="@/assets/img/shapes/shape-10.png"
        class="shape-01 aos"
        alt="img"
        data-aos="fade-right"
      />
      <img
        src="@/assets/img/shapes/shape-8.png"
        class="shape-04 aos"
        alt="img"
        data-aos="fade-left"
      />
    </div>

    <div class="container">
      <layout-indextenheader></layout-indextenheader>

      <div class="row">
        <div class="col-lg-6 col-md-12 banner-left aos" data-aos="fade-up">
          <a class="smooth-menu" href="#appointments">
            <div class="scroll-down">
              <div class="scroll-text">
                <p>scroll down</p>
              </div>
              <div class="scroll-center">
                <div class="scroll-mouse">
                  <div class="scroll-wheel"></div>
                </div>
                <div>
                  <span class="scroll-arrow-one"></span>
                </div>
                <div>
                  <span class="scroll-arrow-two"></span>
                </div>
              </div>
            </div>
          </a>
          <div class="banner-info">
            <h2>Search teacher,</h2>
            <h2><span style="color: #d68325">Make your mum happy!</span></h2>
          </div>
          <div class="banner-details">
            <p>
              Choose the subject you want to learn and we will suggest
              experienced teachers who are right for you. Select the teacher
              according to your needs
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 aos" data-aos="fade-up">
          <img
            src="@/assets/img/teachers/hometeacher.png"
            class="img-fluid dr-img"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <!-- /Home Banner -->

  <section class="appoinment-section" id="appointments">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="appoinment-wrapper">
            <div class="appoinment-box aos" data-aos="fade-up">
              <form>
                <div class="row">
                  <div class="col-lg-11 col-md-12">
                    <div class="form-group appoinment-location">
                      <i class="feather-search"></i>
                      <input
                        v-model="searchBar"
                        type="text"
                        class="form-control"
                        placeholder="Search Courses, Teacher..."
                      />
                    </div>
                  </div>
                  <div class="col-lg-1 col-md-12">
                    <div class="appoinment-right">
                      <div class="form-group">
                        <router-link
                          :to="{
                            name: 'teachers',
                            query: { search: searchBar },
                          }"
                          tag="div"
                        >
                          <button
                            type="submit"
                            class="btn btn-primary search-btn mt-0"
                          >
                            <i class="fas fa-search"></i>
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="userLoggedIn" class="appointment-bg">
      <div class="custom-contain">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-xl-10 col-lg-8 col-md-12">
            <div class="section-header text-center aos" data-aos="fade-up">
              <h2 style="color: #d68325">
                <strong> Today booked lectures..</strong>
              </h2>
            </div>
            <div class="row justify-content-center">
              <div
                v-for="(n, i) in 4"
                class="col-3 d-flex aos"
                data-aos="fade-up"
              >
                <div
                  v-if="!checkDailySlot(i + 15)"
                  class="appointment-grid w-100"
                  style="outline: 2px dashed grey; outline-offset: 0px"
                >
                  <div class="appointment-info">
                    <div class="appointment-link">
                      {{ i + 15 }} - {{ i + 15 + 1 }}
                    </div>
                    <p>
                      You haven't booked a lecture for this time slot yet! Book
                      now and start learning!
                    </p>
                    <router-link
                      :to="{ name: 'teachers' }"
                      class="btn appointment-read-btn"
                      >Book Now <i class="fas fa-arrow-right ms-2"></i
                    ></router-link>
                  </div>
                </div>
                <div v-else class="appointment-grid w-100">
                  <div class="speicality-item text-center">
                    <div class="row">
                      <div
                        class="speicality-img-upcoming col-6"
                        :style="{
                          backgroundColor:
                            '#' + upcomingLectures[index].course_color,
                        }"
                      >
                        <i
                          class="fa fa-book"
                          style="
                            padding-top: 20px;
                            size: 50px;
                            font-size: 60px;
                            color: white;
                          "
                        ></i>
                      </div>
                      <div
                        class="col-6"
                        style="text-align: center; margin: auto"
                      >
                        <h3>
                          {{ upcomingLectures[index].course_title }}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="appointment-info">
                    <div to="/search" class="appointment-link">
                      {{ upcomingLectures[index].start_time }}
                      -
                      {{ upcomingLectures[index].end_time }}
                    </div>
                    <p>
                      Lecture with teacher
                      {{ upcomingLectures[index].teacher_name_surname }}
                    </p>
                    <router-link
                      :to="{
                        name: 'mybookings',
                        query: { date: upcomingLectures[index].date },
                      }"
                      class="btn appointment-read-btn"
                      >Manage <i class="fas fa-arrow-right ms-2"></i
                    ></router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Home Banner -->
</template>

<script>
import axios from "axios";
import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "Banner",

  async created() {
    //if (this.userLoggedIn == true) {
    await axios
      .get(
        "http://localhost:8080/Prenotazioni0_war_exploded/ServletBooking?userid=" +
          this.userId +
          "&dailyupcoming=true",
        {
          headers: {
            Authorization: this.userJwtToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.status != 401) {
          if (response.status == 200) {
            this.upcomingLectures = response.data;
            console.log(response.data);
          } else {
            console.log(response.status);
          }
        } else {
          // Sbatti fuori
        }
      })
      .catch((error) => {
        console.log(error);
      });
    //}
  },

  computed: {
    ...mapState(useUserStore, ["userLoggedIn", "userId", "userJwtToken"]),
  },
  methods: {
    checkDailySlot(startTime) {
      if (this.upcomingLectures.find((e) => e.start_time === startTime)) {
        this.index++;
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      index: -1,
      upcomingLectures: [],
      searchBar: "",
    };
  },
};
</script>
