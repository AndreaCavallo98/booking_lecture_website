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
                  My bookings & Profile
                </li>
              </ol>
            </nav>
            <h2 class="breadcrumb-title">My bookings & Profile</h2>
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
              <!-- Profile Widget -->
              <div class="card widget-profile pat-widget-profile">
                <div class="card-body">
                  <div class="card-header" style="text-align: center">
                    <h4 class="card-title mb-0" style="color: #d68325">
                      PROFILE
                    </h4>
                  </div>
                  <div class="pro-widget-content">
                    <div class="profile-info-widget">
                      <a href="javascript:void(0);" class="booking-doc-img">
                        <img
                          src="@/assets/img/teachers/nofotouser.jpeg"
                          alt="User Image"
                        />
                      </a>
                      <div class="profile-det-info">
                        <h3>{{ userName }}</h3>
                      </div>
                    </div>
                  </div>
                  <div class="patient-info">
                    <ul>
                      <li>Phone <span>+1 952 001 8563</span></li>
                      <li>Age <span>38 Years, Male</span></li>
                      <li>Blood Group <span>AB+</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /Profile Widget -->
              <div class="card search-filter">
                <div class="card-header">
                  <h4 class="card-title mb-0" style="color: #d68325">
                    Search Filter
                  </h4>
                </div>
                <div class="card-body">
                  <div class="filter-widget">
                    <h4>Filter date</h4>
                    <div class="cal-icon">
                      <DatePicker
                        reset-button
                        v-model="lectureDate"
                        class="picker"
                        :editable="true"
                        :clearable="true"
                        input-format="dd/MM/yyyy"
                      />
                    </div>
                  </div>
                  <div class="filter-widget">
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="gender_type"
                          v-model="showDeleted"
                        />
                        <span class="checkmark"></span>
                        <i class="fas fa-trash" style="color: red"></i> Show
                        deleted
                      </label>
                    </div>
                    <div>
                      <label class="custom_check">
                        <input
                          type="checkbox"
                          name="gender_type"
                          v-model="showArchivied"
                        />
                        <span class="checkmark"></span>
                        <i class="fas fa-history" style="color: green"></i>
                        Show archivied
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-7 col-lg-8 col-xl-9">
            <div class="row patient-graph-col">
              <div class="col-12">
                <div class="card">
                  <div class="card-body pt-2 pb-2 mt-1 mb-1">
                    <div class="row">
                      <div
                        class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box"
                      >
                        <a
                          href="javascript:void(0);"
                          class="graph-box"
                          data-bs-toggle="modal"
                          data-bs-target="#graph1"
                        >
                          <div>
                            <h4>BMI Status</h4>
                          </div>
                          <div class="graph-img">
                            <img
                              src="../../../../../assets/img/shapes/graph-01.png"
                              alt=""
                            />
                          </div>
                          <div class="graph-status-result mt-3">
                            <span class="graph-update-date"
                              >Last Update 6d</span
                            >
                          </div>
                        </a>
                      </div>
                      <div
                        class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box"
                      >
                        <a
                          href="javascript:void(0);"
                          class="graph-box pink-graph"
                          data-bs-toggle="modal"
                          data-bs-target="#graph2"
                        >
                          <div>
                            <h4>Heart Rate Status</h4>
                          </div>
                          <div class="graph-img">
                            <img
                              src="../../../../../assets/img/shapes/graph-02.png"
                              alt=""
                            />
                          </div>
                          <div class="graph-status-result mt-3">
                            <span class="graph-update-date"
                              >Last Update 2d</span
                            >
                          </div>
                        </a>
                      </div>
                      <div
                        class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box"
                      >
                        <a
                          href="javascript:void(0);"
                          class="graph-box sky-blue-graph"
                          data-bs-toggle="modal"
                          data-bs-target="#graph3"
                        >
                          <div>
                            <h4>FBC Status</h4>
                          </div>
                          <div class="graph-img">
                            <img
                              src="../../../../../assets/img/shapes/graph-03.png"
                              alt=""
                            />
                          </div>
                          <div class="graph-status-result mt-3">
                            <span class="graph-update-date"
                              >Last Update 5d</span
                            >
                          </div>
                        </a>
                      </div>
                      <div
                        class="col-12 col-md-6 col-lg-4 col-xl-3 patient-graph-box"
                      >
                        <a
                          href="javascript:void(0);"
                          class="graph-box orange-graph"
                          data-bs-toggle="modal"
                          data-bs-target="#graph4"
                        >
                          <div>
                            <h4>Weight Status</h4>
                          </div>
                          <div class="graph-img">
                            <img
                              src="../../../../../assets/img/shapes/graph-04.png"
                              alt=""
                            />
                          </div>
                          <div class="graph-status-result mt-3">
                            <span class="graph-update-date"
                              >Last Update 3d</span
                            >
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body pt-0">
                <div class="card card-table mb-0">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-hover table-center mb-0">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Time Slot</th>
                            <th>Teacher</th>
                            <th>Course</th>
                            <th>Status</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            :style="{
                              opacity:
                                booking.has_review || booking.deleted ? 0.5 : 1,
                              backgroundColor: booking.has_review
                                ? '#f2f2f2'
                                : booking.deleted
                                ? '#ffebe6'
                                : booking.confirmed
                                ? '#ebf9f2'
                                : 'white',
                            }"
                            v-for="(booking, i) in filteredBookings"
                            :key="booking.id"
                          >
                            <td>{{ booking.date }}</td>
                            <td>
                              {{ booking.start_time }} - {{ booking.end_time }}
                            </td>
                            <td>{{ booking.teacher_name_surname }}</td>
                            <td>
                              <button
                                type="button"
                                class="btn btn-sm me-1"
                                :style="{
                                  backgroundColor: '#' + booking.course_color,
                                }"
                              >
                                {{ booking.course_title }}
                              </button>
                            </td>
                            <td>
                              <div
                                class="rating mapgridrating"
                                v-if="booking.has_review"
                              >
                                <i class="fas fa-star filled"></i> Reviewed
                              </div>
                              <div v-else-if="booking.deleted">
                                <i class="fas fa-trash" style="color: red"></i>
                                Deleted
                              </div>
                              <div v-else-if="!booking.confirmed">
                                <i class="fa fa-clock"></i>
                                Pending
                              </div>
                              <div v-else-if="booking.confirmed">
                                <i class="fas fa-star" style="color: grey"></i>
                                Missing review
                              </div>
                            </td>
                            <td class="text-end">
                              <div class="table-action">
                                <a
                                  v-if="
                                    booking.confirmed && !booking.has_review
                                  "
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-warning-light me-1"
                                  @click.prevent="
                                    openReviewModal(
                                      booking.teacher_name_surname,
                                      booking.id
                                    )
                                  "
                                >
                                  <i class="fas fa-star filled"></i>
                                  Review
                                </a>
                                <a
                                  v-if="
                                    !booking.confirmed &&
                                    !booking.deleted &&
                                    convertedDate(
                                      booking.date,
                                      booking.end_time
                                    ) < Date.now()
                                  "
                                  @click.prevent="confirmBooking(booking.id, i)"
                                  href="javascript:void(0);"
                                  class="btn btn-sm bg-success-light me-1"
                                >
                                  <i class="fas fa-check"></i>
                                  Confirm
                                </a>
                                <a
                                  v-if="!booking.confirmed && !booking.deleted"
                                  class="btn btn-sm bg-danger-light me-1"
                                  @click.prevent="deleteBooking(booking.id, i)"
                                >
                                  <i class="fas fa-trash"></i> Delete
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
  </div>
  <div
    class="modal fade bd-example-modal-lg"
    id="review_modal"
    role="dialog"
    style="display: none"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="myLargeModalLabel">
            Rate to <strong>{{ name_teacher_reviewed }}</strong>
          </h4>
          <button
            class="btn-close"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
            data-original-title=""
            title=""
          ></button>
        </div>
        <div class="modal-body">
          <!-- Write Review -->
          <div class="write-review">
            <!-- Write Review Form -->
            <form>
              <div class="form-group">
                <label>Review</label>
                <div class="star-rating">
                  <input
                    id="star-5"
                    type="radio"
                    name="rating"
                    value="star-5"
                  />
                  <label for="star-5" title="5 stars">
                    <i class="active fa fa-star"></i>
                  </label>
                  <input
                    id="star-4"
                    type="radio"
                    name="rating"
                    value="star-4"
                  />
                  <label for="star-4" title="4 stars">
                    <i class="active fa fa-star"></i>
                  </label>
                  <input
                    id="star-3"
                    type="radio"
                    name="rating"
                    value="star-3"
                  />
                  <label for="star-3" title="3 stars">
                    <i class="active fa fa-star"></i>
                  </label>
                  <input
                    id="star-2"
                    type="radio"
                    name="rating"
                    value="star-2"
                  />
                  <label for="star-2" title="2 stars">
                    <i class="active fa fa-star"></i>
                  </label>
                  <input
                    id="star-1"
                    type="radio"
                    name="rating"
                    value="star-1"
                  />
                  <label for="star-1" title="1 star">
                    <i class="active fa fa-star"></i>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <label>Title of your review</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="If you could say it in one sentence, what would you say?"
                />
              </div>
              <div class="form-group">
                <label>Your review</label>
                <textarea id="review_desc" class="form-control"></textarea>
              </div>
              <hr />
              <div class="submit-section">
                <button type="submit" class="btn btn-primary submit-btn">
                  Add Review
                </button>
              </div>
            </form>
            <!-- /Write Review Form -->
          </div>
          <!-- /Write Review -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DatePicker from "vue3-datepicker";
import Swal from "sweetalert2";

import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "Mybookings",
  components: {
    DatePicker,
    Swal,
  },
  async created() {
    await axios
      .get(
        "http://localhost:8080/Prenotazioni0_war_exploded/ServletBooking?userid=" +
          this.userId +
          "&dailyupcoming=false",
        {
          headers: {
            Authorization: this.userJwtToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status != 401) {
          if (response.status == 200) {
            this.bookings = response.data;
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
  },
  data() {
    return {
      bookings: [],
      showDeleted: false,
      showArchivied: false,
      lectureDate: null,

      name_teacher_reviewed: "",
      reviewedBookingId: -1,
    };
  },
  computed: {
    ...mapState(useUserStore, ["userId", "userJwtToken", "userName"]),
    filteredBookings() {
      this.bookings.confirmed;
      return this.bookings
        .filter((booking) => {
          return this.showDeleted ? true : booking.deleted == false;
        })
        .filter((booking) => {
          return this.showArchivied ? true : booking.has_review == false;
        })
        .filter((booking) => {
          return this.lectureDate == null
            ? true
            : booking.date == this.formatDate(this.lectureDate);
        });
    },
  },
  methods: {
    deleteBooking(id, index) {
      Swal.fire({
        title: "Do you want delete the booking?",
        text: "You won't be able to revert this!",
        icon: "danger",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "DELETE",
        cancelButtonText: "NO",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios
            .delete(
              "http://localhost:8080/Prenotazioni0_war_exploded/ServletBooking?bookingid=" +
                id,
              {
                headers: {
                  Authorization: this.userJwtToken,
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
              if (response.status == 200) {
                this.bookings[index].deleted = true;
                Swal.fire(
                  "Deleted!",
                  "Your booking has been deleted.",
                  "success"
                );
              } else {
                Swal.fire(
                  "Attention!",
                  "Error during deleting booking",
                  "error"
                );
              }
            })
            .catch((error) => {
              console.log(error);
            });
        }
      });
    },
    confirmBooking(id, index) {
      Swal.fire({
        title: "have you completed the lesson with your teacher?",
        text: "Confirm lecture",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "NO",
        confirmButtonText: "CONFIRM",
        reverseButtons: true,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios
            .put(
              "http://localhost:8080/Prenotazioni0_war_exploded/ServletBooking?bookingid=" +
                id,
              {},
              {
                headers: {
                  Authorization: this.userJwtToken,
                  "Content-Type": "application/json",
                },
              }
            )
            .then((response) => {
              if (response.status == 200) {
                var foundIndex = this.bookings.findIndex((x) => x.id == id);
                this.bookings[foundIndex].confirmed = true;
                Swal.fire(
                  "Confirmed!",
                  "Your booking has been confirmed.",
                  "success"
                );
              } else {
                Swal.fire(
                  "Attention!",
                  "Error during confirmation of lecture",
                  "error"
                );
              }
            })
            .catch((error) => {
              console.log(error);
              //Swal.fire("Attention!", error.message, "error");
            });
        }
      });
    },
    openReviewModal(teacherName, bookingId) {
      this.name_teacher_reviewed = teacherName;
      this.reviewedBookingId = bookingId;
      $("#review_modal").modal("show");
    },
    formatDate(date) {
      var currentDate = date;
      var month = currentDate.getMonth() + 1;
      if (month < 10) month = "0" + month;
      var dateOfMonth = currentDate.getDate();
      if (dateOfMonth < 10) dateOfMonth = "0" + dateOfMonth;
      var year = currentDate.getFullYear();
      var formattedDate = dateOfMonth + "/" + month + "/" + year;
      return formattedDate;
    },
    convertedDate(dateString, numOfHours) {
      let parts_of_date = dateString.split("/");
      let date_converted = new Date(
        +parts_of_date[2],
        parts_of_date[1] - 1,
        +parts_of_date[0]
      );
      date_converted.setTime(
        date_converted.getTime() + numOfHours * 60 * 60 * 1000
      );
      return date_converted;
    },
  },
};
</script>
