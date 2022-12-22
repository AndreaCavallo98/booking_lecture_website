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
                <li class="breadcrumb-item" aria-current="page">
                  <router-link
                    :to="{ name: 'teacher', params: { id: teacher.id } }"
                    >{{ teacher.name }} {{ teacher.surname }}</router-link
                  >
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Book lecture
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
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickyside">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title mb-0">LEGEND</h4>
                </div>
                <div class="card-body">
                  <div id="calendar-events" class="mb-3">
                    <div class="calendar-events">
                      <i class="fas fa-square" style="color: #80ffaa"></i>
                      Available
                    </div>
                    <div class="calendar-events">
                      <i class="fas fa-square" style="color: #ff6666"></i> Not
                      available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Calendar -->
          <div class="col-md-7 col-lg-8 col-xl-9">
            <div class="card">
              <div class="card-body">
                <FullCalendar
                  :options="calendarOptions"
                  :events="calendarOptionsEventsComputed"
                ></FullCalendar>
              </div>
            </div>
          </div>
          <!-- /Calendar -->
        </div>
      </div>
    </div>
    <!-- /Page Content -->

    <!-- Payment Request Moodal -->

    <!-- /Payment Request Moodal -->
  </div>
  <div
    class="modal fade custom-modal"
    id="payment_request_modal"
    role="dialog"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" style="color: #d68325">
            Book lecture with {{ teacher.name }} {{ teacher.surname }} in
            {{ bookingDate }} Time Slot: {{ bookingStartTime }} -
            {{ bookingEndTime }}
          </h3>
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <form id="payment_request_form" method="post">
            <div class="filter-widget">
              <label>What you want to learn with {{ teacher.name }}</label>
              <select class="form-select" v-model="bookingSelectedCourse">
                <option
                  class="sorting"
                  :value="course.id"
                  v-for="course in teacher.teached_courses"
                  :key="course.id"
                >
                  {{ course.title }}
                </option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer text-center">
          <button
            id="request_btn"
            @click.prevent="saveBooking"
            class="btn btn-primary"
          >
            Confirm book
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import momentPlugin from "@fullcalendar/moment";

import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "Booklecture",
  components: {
    FullCalendar,
  },
  async created() {
    await this.getTeacherInfo();

    let param = this.$route.params.id;
    let userIdStore = this.userId;
    let userJwtTokenStore = this.userJwtToken;

    this.calendarOptions.events = async function (
      info,
      successCallback,
      failureCallback
    ) {
      let date = new Date(info.start);
      let year_start = date.getFullYear();
      let month_start = date.getMonth() + 1;
      let dt_start = date.getDate();

      if (dt_start < 10) {
        dt_start = "0" + dt_start;
      }
      if (month_start < 10) {
        month_start = "0" + month_start;
      }

      date = new Date(info.end);
      let year_end = date.getFullYear();
      let month_end = date.getMonth() + 1;
      let dt_end = date.getDate();

      if (dt_end < 10) {
        dt_end = "0" + dt_end;
      }
      if (month_end < 10) {
        month_end = "0" + month_end;
      }

      await axios
        .get(
          "http://localhost:8080/Prenotazioni0_war_exploded/ServletCalendar?type=weekly&teacherid=" +
            param +
            "&startday=" +
            year_start +
            "/" +
            month_start +
            "/" +
            dt_start +
            "&endday=" +
            year_end +
            "/" +
            month_end +
            "/" +
            dt_end +
            "&userid=" +
            userIdStore,
          {
            headers: {
              Authorization: userJwtTokenStore,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          //console.log(response.data);
          successCallback(
            response.data.map(function (eventEl) {
              var newdate = eventEl.date
                .split("/")
                .reverse()
                .join("/")
                .replaceAll("/", "-");
              console.log(newdate + "T" + eventEl.from.toString() + ":00:00");
              return {
                //title: "",
                start: newdate + "T" + eventEl.from.toString() + ":00:00",
                editable: false,
                backgroundColor: eventEl.avaliable ? "#80ffaa" : "#ff6666",
                textColor: "black",
                available: eventEl.avaliable,
                allDay: false,
                bookingDate: eventEl.date,
                bookingStartTime: eventEl.from,
                bookingEndTime: eventEl.to,
              };
            })
          );
        })
        .catch((error) => {
          failureCallback();
        });
    };
  },
  computed: {
    ...mapState(useUserStore, ["userId", "userJwtToken"]),
    calendarOptionsEventsComputed() {
      return this.calendarOptions.events;
    },
  },
  methods: {
    async getTeacherInfo() {
      await axios
        .get(
          "http://localhost:8080/Prenotazioni0_war_exploded/ServletTeacher?type=teacherdetail&id=" +
            this.$route.params.id
        )
        .then((response) => {
          if (response.data == null) {
            this.$router.push({ name: "homepage" });
            return;
          }
          this.teacher = response.data;
          this.bookingSelectedCourse = this.teacher.teached_courses[0].id;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async saveBooking() {
      await axios
        .post(
          "http://localhost:8080/Prenotazioni0_war_exploded/ServletBooking",
          {
            courseid: this.bookingSelectedCourse,
            teacherid: this.teacher.id,
            userid: this.userId,
            date: this.bookingDate,
            starttime: this.bookingStartTime,
            endtime: this.bookingEndTime,
          },
          {
            headers: {
              Authorization: this.userJwtToken,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (response.status != 401) {
            if (response.status == 200) {
              if (response.data != -1) {
                $("#payment_request_modal").modal("hide");
                this.$router.push({ name: "mybookings" });
              } else {
                // Errore durante l'inserimento
              }
            }
          } else {
            // Sbatti fuori
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    let self = this;
    return {
      bookingSelectedCourse: -1,
      teacher: null,
      bookingDate: "",
      bookingStartTime: -1,
      bookingEndTime: -1,
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
          momentPlugin,
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek",
        },
        eventClick: function (info) {
          info.jsEvent.preventDefault(); // don't let the browser navigate
          if (info.event.extendedProps.available) {
            $("#payment_request_modal").modal("show");
            self.bookingDate = info.event.extendedProps.bookingDate;
            self.bookingStartTime = info.event.extendedProps.bookingStartTime;
            self.bookingEndTime = info.event.extendedProps.bookingEndTime;
          }
        },
        slotLabelFormat: "HH:mm",
        slotMinTime: "13:00:00",
        slotMaxTime: "21:00:00",
        eventTimeFormat: {
          // like '14:30:00'
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        },

        initialView: "timeGridWeek",
        editable: false,
        selectable: false,
        selectMirror: false,
        dayMaxEvents: true,
        weekends: true,
      },
    };
  },
  computed: {
    ...mapState(useUserStore, ["userId", "userJwtToken"]),
  },
};
</script>
