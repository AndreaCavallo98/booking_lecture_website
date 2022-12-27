<template>
  <div class="main-wrapper">
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-xl-12">
            <div class="card">
              <div class="card-body pt-0">
                <!-- Tab Menu -->
                <nav class="user-tabs mb-4">
                  <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        href="#pat_appointments"
                        data-bs-toggle="tab"
                        >Manage Courses</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#pat_prescriptions"
                        data-bs-toggle="tab"
                        >Manage Teachers</a
                      >
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="#pat_medical_records"
                        data-bs-toggle="tab"
                        >Manage User Bookings</a
                      >
                    </li>
                  </ul>
                </nav>
                <!-- /Tab Menu -->

                <!-- Tab Content -->
                <div class="tab-content pt-0">
                  <div id="pat_appointments" class="tab-pane fade show active">
                    <!-- Page Content -->
                    <div class="content">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-md-12 col-lg-12 col-xl-12">
                            <div class="card">
                              <div class="card-header">
                                <div class="row">
                                  <div class="col-sm-6">
                                    <h3 class="card-title">Courses</h3>
                                  </div>
                                  <div class="col-sm-6">
                                    <div class="text-end">
                                      <a
                                        href="#modal_addcourse"
                                        data-bs-toggle="modal"
                                        class="btn btn-primary btn-sm"
                                        tabindex="0"
                                        >Add Course</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card-body">
                                <!-- Dependent Tab -->
                                <div class="card card-table mb-0">
                                  <div class="card-body">
                                    <div class="table-responsive">
                                      <table
                                        class="table table-hover table-center mb-0"
                                      >
                                        <thead>
                                          <tr>
                                            <th>Title</th>
                                            <th>Color</th>
                                            <th>Active</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr
                                            v-for="course in courses"
                                            :key="course.id"
                                          >
                                            <td>
                                              {{ course.title }}
                                            </td>
                                            <td>
                                              <i
                                                class="fas fa-square"
                                                :style="{
                                                  color: '#' + course.color,
                                                }"
                                              ></i>
                                              #{{ course.color }}
                                            </td>
                                            <td>
                                              <label class="custom_check">
                                                <input
                                                  type="checkbox"
                                                  name="gender_type"
                                                  :checked="course.active"
                                                  @change="
                                                    courseToggleActive(
                                                      course.id,
                                                      course.active
                                                    )
                                                  "
                                                />
                                                <span class="checkmark"></span>
                                              </label>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <!-- /Dependent Tab -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /Page Content -->
                  </div>
                  <div class="tab-pane fade" id="pat_prescriptions">
                    <!-- Page Content -->
                    <div class="content">
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-md-12 col-lg-12 col-xl-12">
                            <div class="card">
                              <div class="card-header">
                                <div class="row">
                                  <div class="col-sm-6">
                                    <h3 class="card-title">Teachers</h3>
                                  </div>
                                  <div class="col-sm-6">
                                    <div class="text-end">
                                      <a
                                        href="#modal_addteacher"
                                        data-bs-toggle="modal"
                                        class="btn btn-primary btn-sm"
                                        tabindex="0"
                                        >Add Teacher</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card-body">
                                <!-- Dependent Tab -->
                                <div class="card card-table mb-0">
                                  <div class="card-body">
                                    <div class="table-responsive">
                                      <table
                                        class="table table-hover table-center mb-0"
                                      >
                                        <thead>
                                          <tr>
                                            <th>Teacher</th>
                                            <th>Teached</th>
                                            <th>Description</th>
                                            <th>Hourly Rate</th>
                                            <th>Active</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr
                                            v-for="teacher in teachers"
                                            :key="teacher.id"
                                          >
                                            <td>
                                              {{ teacher.name }}
                                              {{ teacher.surname }}
                                            </td>
                                            <td>
                                              <div class="table-action">
                                                <a
                                                  @click.prevent="
                                                    openModalUdpateTeachedCourses(
                                                      teacher
                                                    )
                                                  "
                                                  class="btn btn-sm bg-info-light me-1"
                                                >
                                                  <i class="fa fa-book"></i>
                                                  Courses
                                                </a>
                                              </div>
                                            </td>
                                            <td>
                                              {{
                                                teacher.description.substring(
                                                  0,
                                                  50
                                                ) + "..."
                                              }}
                                            </td>
                                            <td>
                                              {{ teacher.hourly_rate }} € / hour
                                            </td>
                                            <td>
                                              <label class="custom_check">
                                                <input
                                                  type="checkbox"
                                                  name="gender_type"
                                                  :checked="teacher.active"
                                                  @change="
                                                    teacherToggleActive(
                                                      teacher.id,
                                                      teacher.active
                                                    )
                                                  "
                                                />
                                                <span class="checkmark"></span>
                                              </label>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </div>
                                <!-- /Dependent Tab -->
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /Page Content -->
                  </div>
                  <div id="pat_medical_records" class="tab-pane fade">
                    <div class="content">
                      <div class="container-fluid">
                        <div class="row">
                          <div
                            class="col-md-3 col-lg-3 col-xl-3 theiaStickySidebar"
                          >
                            <div class="stickyside">
                              <div class="card search-filter">
                                <div class="card-header">
                                  <h4
                                    class="card-title mb-0"
                                    style="color: #d68325"
                                  >
                                    Search Filter
                                  </h4>
                                </div>
                                <div class="card-body">
                                  <div class="filter-widget">
                                    <select
                                      class="form-select"
                                      v-model="selectedUser"
                                    >
                                      <option class="sorting" :value="-1">
                                        No selected user
                                      </option>
                                      <option
                                        class="sorting"
                                        :value="user.id"
                                        v-for="user in users"
                                        :key="user.id"
                                      >
                                        {{ user.name }} {{ user.surname }}
                                      </option>
                                    </select>
                                  </div>
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
                                        <i
                                          class="fas fa-trash"
                                          style="color: red"
                                        ></i>
                                        Show deleted
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
                                        <i
                                          class="fas fa-history"
                                          style="color: green"
                                        ></i>
                                        Show archivied
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="col-md-9 col-lg-9 col-xl-9">
                            <div class="row patient-graph-col">
                              <div class="col-12">
                                <div class="card">
                                  <div class="card-body pt-2 pb-2 mt-1 mb-1">
                                    <div class="row">
                                      <div class="col patient-graph-box">
                                        <a
                                          class="graph-box"
                                          data-bs-toggle="modal"
                                          data-bs-target="#graph1"
                                        >
                                          <div>
                                            <h4>PENDING</h4>
                                          </div>
                                          <div class="graph-img">
                                            <h1 style="color: white">
                                              {{
                                                filteredBookings.filter(
                                                  (booking) =>
                                                    booking.confirmed ==
                                                      false && !booking.deleted
                                                ).length
                                              }}
                                            </h1>
                                          </div>
                                        </a>
                                      </div>
                                      <div class="col patient-graph-box">
                                        <a
                                          class="graph-box green-graph"
                                          data-bs-toggle="modal"
                                          data-bs-target="#graph2"
                                        >
                                          <div>
                                            <h4>MISSING REVIEW</h4>
                                          </div>
                                          <div class="graph-img">
                                            <h1 style="color: white">
                                              {{
                                                filteredBookings.filter(
                                                  (booking) =>
                                                    booking.confirmed == true &&
                                                    !booking.has_review
                                                ).length
                                              }}
                                            </h1>
                                          </div>
                                        </a>
                                      </div>
                                      <div class="col patient-graph-box">
                                        <a
                                          class="graph-box yellow-graph"
                                          data-bs-toggle="modal"
                                          data-bs-target="#graph2"
                                        >
                                          <div>
                                            <h4>REVIEWED</h4>
                                          </div>
                                          <div class="graph-img">
                                            <h1 style="color: white">
                                              {{
                                                bookings
                                                  .filter(
                                                    (booking) =>
                                                      booking.has_review == true
                                                  )
                                                  .filter((booking) =>
                                                    selectedUser == -1
                                                      ? true
                                                      : booking.id_user ==
                                                        selectedUser
                                                  ).length
                                              }}
                                            </h1>
                                          </div>
                                        </a>
                                      </div>
                                      <div class="col patient-graph-box">
                                        <a
                                          class="graph-box pink-graph"
                                          data-bs-toggle="modal"
                                          data-bs-target="#graph3"
                                        >
                                          <div>
                                            <h4>DELETED</h4>
                                          </div>
                                          <div class="graph-img">
                                            <h1 style="color: white">
                                              {{
                                                bookings
                                                  .filter(
                                                    (booking) =>
                                                      booking.deleted == true
                                                  )
                                                  .filter((booking) =>
                                                    selectedUser == -1
                                                      ? true
                                                      : booking.id_user ==
                                                        selectedUser
                                                  ).length
                                              }}
                                            </h1>
                                          </div>
                                        </a>
                                      </div>
                                      <div class="col patient-graph-box">
                                        <a
                                          href="javascript:void(0);"
                                          class="graph-box sky-blue-graph"
                                          data-bs-toggle="modal"
                                          data-bs-target="#graph4"
                                        >
                                          <div>
                                            <h4>ALL</h4>
                                          </div>
                                          <div class="graph-img">
                                            <h1 style="color: white">
                                              {{
                                                bookings.filter((booking) =>
                                                  selectedUser == -1
                                                    ? true
                                                    : booking.id_user ==
                                                      selectedUser
                                                ).length
                                              }}
                                            </h1>
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
                                      <table
                                        class="table table-hover table-center mb-0"
                                      >
                                        <thead>
                                          <tr>
                                            <th>User</th>
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
                                                booking.has_review ||
                                                booking.deleted
                                                  ? 0.5
                                                  : 1,
                                              backgroundColor:
                                                booking.has_review
                                                  ? '#f2f2f2'
                                                  : booking.deleted
                                                  ? '#ffebe6'
                                                  : booking.confirmed
                                                  ? '#ebf9f2'
                                                  : 'white',
                                            }"
                                            v-for="(
                                              booking, i
                                            ) in filteredBookings"
                                            :key="booking.id"
                                          >
                                            <td>
                                              <h2 class="table-avatar">
                                                <div
                                                  class="avatar avatar-sm me-2"
                                                >
                                                  <img
                                                    class="avatar-img rounded-circle"
                                                    src="@/assets/img/teachers/nofotouser.jpeg"
                                                    alt="User Image"
                                                  />
                                                </div>
                                                <div>
                                                  {{
                                                    booking.user_name_surname
                                                  }}
                                                  <span
                                                    >#{{
                                                      booking.id_user
                                                    }}</span
                                                  >
                                                </div>
                                              </h2>
                                            </td>
                                            <td>{{ booking.date }}</td>
                                            <td>
                                              {{ booking.start_time }} -
                                              {{ booking.end_time }}
                                            </td>
                                            <td>
                                              {{ booking.teacher_name_surname }}
                                            </td>
                                            <td>
                                              <button
                                                type="button"
                                                class="btn btn-sm me-1"
                                                :style="{
                                                  backgroundColor:
                                                    '#' + booking.course_color,
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
                                                <i
                                                  class="fas fa-star filled"
                                                ></i>
                                                Reviewed
                                              </div>
                                              <div v-else-if="booking.deleted">
                                                <i
                                                  class="fas fa-trash"
                                                  style="color: red"
                                                ></i>
                                                Deleted
                                              </div>
                                              <div
                                                v-else-if="!booking.confirmed"
                                              >
                                                <i class="fa fa-clock"></i>
                                                Pending
                                              </div>
                                              <div
                                                v-else-if="booking.confirmed"
                                              >
                                                <i
                                                  class="fas fa-star"
                                                  style="color: grey"
                                                ></i>
                                                Missing review
                                              </div>
                                            </td>
                                            <td class="text-end">
                                              <div class="table-action">
                                                <a
                                                  v-if="
                                                    !booking.confirmed &&
                                                    !booking.deleted
                                                  "
                                                  class="btn btn-sm bg-danger-light me-1"
                                                  @click.prevent="
                                                    deleteBooking(booking.id, i)
                                                  "
                                                >
                                                  <i class="fas fa-trash"></i>
                                                  Delete
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
                  </div>
                </div>
                <!-- Tab Content -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
  </div>

  <!-- New Course Modal-->
  <div
    id="modal_addcourse"
    class="modal fade custom-modal"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <vee-form :validation-schema="courseSchema" @submit="addCourse">
          <div class="modal-header">
            <h5 class="modal-title">Add new course</h5>
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
            <div class="form-group">
              <label class="control-label mb-10"> Title </label>
              <vee-field
                placeholder="Insert course title..."
                type="text"
                name="title"
                class="form-control"
              />
              <ErrorMessage class="veeinvalid" name="title" />
            </div>
            <div class="form-group">
              <label class="control-label mb-10"> Select course color</label>
              <vee-field
                style="margin: 0.4rem; width: -webkit-fill-available"
                type="color"
                id="head"
                name="color"
                value="#e66465"
                class="form-control"
              />
            </div>
          </div>
          <div class="modal-footer text-center">
            <button type="submit" class="btn btn-primary submit-btn">
              Save Course
            </button>
          </div>
        </vee-form>
      </div>
    </div>
  </div>

  <!-- New Teacher Modal-->
  <div
    id="modal_addteacher"
    class="modal fade custom-modal"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <vee-form :validation-schema="teacherSchema" @submit="addTeacher">
          <div class="modal-header">
            <h5 class="modal-title">Add new teacher</h5>
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
            <div class="form-group">
              <label class="control-label mb-10"> Name</label>
              <vee-field type="text" name="name" class="form-control" />
              <ErrorMessage class="veeinvalid" name="name" />
            </div>
            <div class="form-group">
              <label class="control-label mb-10"> Surname</label>
              <vee-field type="text" name="surname" class="form-control" />
              <ErrorMessage class="veeinvalid" name="surname" />
            </div>
            <div class="form-group">
              <label>Description</label>
              <vee-field
                as="textarea"
                name="description"
                id="review_desc"
                class="form-control"
              ></vee-field>
              <ErrorMessage class="veeinvalid" name="description" />
            </div>
            <div class="form-group">
              <label class="control-label mb-10">Hourly Rate (€ / hour) </label>
              <vee-field
                type="number"
                name="hourly_rate"
                class="form-control"
              />
              <ErrorMessage class="veeinvalid" name="hourly_rate" />
            </div>
            <div class="form-group">
              <label class="control-label mb-10">Main teached course </label>
              <select
                as="select"
                class="form-select"
                v-model="mainSelectedCourse"
              >
                <option
                  class="sorting"
                  :value="course.id"
                  v-for="course in mainSelectCourses"
                  :key="course.id"
                >
                  {{ course.title }}
                </option>
              </select>
            </div>
          </div>
          <div class="modal-footer text-center">
            <button type="submit" class="btn btn-primary submit-btn">
              Save Teacher
            </button>
          </div>
        </vee-form>
      </div>
    </div>
  </div>

  <!-- Update Teacher courses Modal-->
  <div
    id="modal_updateTeachedCourses"
    class="modal fade custom-modal"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h5 class="modal-title">
              Select {{ modalTeacher == null ? "" : modalTeacher.name }}'s
              teached courses
            </h5>
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
            <div v-for="course in mainSelectCourses" :key="course.id">
              <label class="custom_check">
                <input
                  type="checkbox"
                  name="course_checkbox"
                  :value="course.id"
                  :checked="
                    modalTeacher == null
                      ? false
                      : modalTeacher.teached_courses.find(
                          (tCourse) => tCourse.id == course.id
                        )
                  "
                />
                <span class="checkmark"></span
                ><i
                  class="fa fa-square"
                  :style="{ color: '#' + course.color }"
                ></i>
                {{ course.title }}
              </label>
            </div>
          </div>
          <div class="modal-footer text-center">
            <button
              @click.prevent="updateTeacherCourses"
              class="btn btn-primary submit-btn"
            >
              Save Teached courses
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Dependent Modal-->
</template>
<script>
import axios from "axios";
import DatePicker from "vue3-datepicker";
import Swal from "sweetalert2";
import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  components: {
    Swal,
    DatePicker,
  },
  mounted() {
    /*$("#modal_updateTeachedCourses").on("hidden.bs.modal", function () {
      var arrMarkMail = document.getElementsByName("course_checkbox");
      for (var i = 0; i < arrMarkMail.length; i++) {
        arrMarkMail[i].checked = false;
      }
    });*/
  },
  async created() {
    await axios
      .get(
        "http://localhost:8080/Prenotazioni0_war_exploded/ServletCourse?admin=true",
        {
          headers: {
            Authorization: this.userJwtToken,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        this.courses = response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        "http://localhost:8080/Prenotazioni0_war_exploded/ServletTeacher?type=all&courseid=-1&avaliabledate=&maxhourlyrate=0&admin=true"
      )
      .then((response) => {
        this.teachers = response.data;
        console.log(this.teachers[0]);
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get("http://localhost:8080/Prenotazioni0_war_exploded/ServletCourse")
      .then((response) => {
        this.mainSelectCourses = response.data;
        this.mainSelectedCourse = this.mainSelectCourses[0].id;
      })
      .catch((error) => {
        console.log(error);
      });

    await axios
      .get(
        "http://localhost:8080/Prenotazioni0_war_exploded/ServletBooking?admin=true",
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

    await axios
      .get("http://localhost:8080/Prenotazioni0_war_exploded/servlet-auth", {
        headers: {
          Authorization: this.userJwtToken,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status != 401) {
          if (response.status == 200) {
            this.users = response.data;
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
      courseSchema: {
        title: "required",
      },
      teacherSchema: {
        name: "required",
        surname: "required",
        description: "required|min:20",
        hourly_rate: "required|min_value:1",
      },
      courses: [],
      teachers: [],
      bookings: [],

      users: [],
      showDeleted: false,
      showArchivied: false,
      lectureDate: null,
      selectedUser: -1,

      mainSelectCourses: [],
      modalTeacher: null,
    };
  },
  methods: {
    async addCourse(values) {
      await axios
        .post(
          "http://localhost:8080/Prenotazioni0_war_exploded/ServletCourse",
          {
            title: values.title,
            color: values.color.replace("#", ""),
          },
          {
            headers: {
              Authorization: this.userJwtToken,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          if (response.status != 401) {
            if (response.status == 200) {
              $("#modal_addcourse").modal("hide");

              if (response.data != -1) {
                const course = {
                  id: response.data,
                  title: values.title,
                  color: values.color.replace("#", ""),
                  image_name: "",
                  active: true,
                };

                this.courses.push(course);
                this.mainSelectCourses.push(course);

                Swal.fire(
                  "Course saved!",
                  "Your course has been saved.",
                  "success"
                );
              } else {
                Swal.fire("Attention!", "Error during saving course", "error");
              }
            } else {
              Swal.fire("Attention!", "Error during saving course", "error");
            }
          } else {
            Swal.fire(
              "Attention!",
              "You don't have right to do this operation",
              "error"
            );
          }
        })
        .catch((error) => {
          Swal.fire("Error!", error.message, "error");
        });
    },
    async courseToggleActive(id, active) {
      await axios
        .put(
          "http://localhost:8080/Prenotazioni0_war_exploded/ServletCourse?courseid=" +
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
            var foundIndex = this.courses.findIndex((x) => x.id == id);
            this.courses[foundIndex].active = !active;
            Swal.fire(
              "Update confirmed!",
              "Your course has been updated.",
              "success"
            );
          } else {
            Swal.fire("Attention!", "Error during updating of course", "error");
          }
        })
        .catch((error) => {
          console.log(error);
          //Swal.fire("Attention!", error.message, "error");
        });
    },
    async addTeacher(values) {
      await axios
        .post(
          "http://localhost:8080/Prenotazioni0_war_exploded/ServletTeacher",
          {
            action: "newteacher",
            name: values.name,
            surname: values.surname,
            description: values.description,
            hourlyrate: values.hourly_rate,
            courseid: this.mainSelectedCourse,
          },
          {
            headers: {
              Authorization: this.userJwtToken,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          if (response.status != 401) {
            if (response.status == 200) {
              $("#modal_addteacher").modal("hide");

              //num_lectures_given: 0;
              //num_reviews: 0;
              //reviews_average: 0;
              //teached_courses: [];

              if (response.data != -1) {
                const teacher = {
                  id: response.data,
                  name: values.name,
                  surname: values.surname,
                  description: values.description,
                  hourly_rate: values.hourly_rate,
                  image_name: "",
                  active: true,
                  teached_courses: [
                    {
                      id: this.mainSelectedCourse,
                    },
                  ],
                };

                this.teachers.unshift(teacher);

                Swal.fire(
                  "Teacher saved!",
                  "Your teacher has been saved.",
                  "success"
                );
              } else {
                Swal.fire("Attention!", "Error during saving teacher", "error");
              }
            } else {
              Swal.fire("Attention!", "Error during saving teacher", "error");
            }
          } else {
            Swal.fire(
              "Attention!",
              "You don't have right to do this operation",
              "error"
            );
          }
        })
        .catch((error) => {
          Swal.fire("Error!", error.message, "error");
        });
    },
    async teacherToggleActive(id, active) {
      await axios
        .put(
          "http://localhost:8080/Prenotazioni0_war_exploded/ServletTeacher?teacherid=" +
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
            var foundIndex = this.teachers.findIndex((x) => x.id == id);
            this.teachers[foundIndex].active = !active;
            Swal.fire(
              "Update confirmed!",
              "Your teacher has been updated.",
              "success"
            );
          } else {
            Swal.fire(
              "Attention!",
              "Error during updating of teacher",
              "error"
            );
          }
        })
        .catch((error) => {
          console.log(error);
          //Swal.fire("Attention!", error.message, "error");
        });
    },
    openModalUdpateTeachedCourses(teacher) {
      this.modalTeacher = teacher;

      $("#modal_updateTeachedCourses").modal("show");
    },
    async updateTeacherCourses() {
      let checkedCoursesArray = [];
      $("input:checkbox[name=course_checkbox]:checked").each(function () {
        checkedCoursesArray.push($(this).val());
      });

      if (checkedCoursesArray.length <= 0) {
        Swal.fire(
          "Attention!",
          "One teacher must have one teached course at least",
          "error"
        );
      } else {
        await axios
          .post(
            "http://localhost:8080/Prenotazioni0_war_exploded/ServletTeacher",
            {
              action: "courseassociation",
              idteacher: this.modalTeacher.id,
              coursearray: JSON.stringify(checkedCoursesArray),
            },
            {
              headers: {
                Authorization: this.userJwtToken,
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((response) => {
            if (response.status != 401) {
              if (response.status == 200) {
                var foundIndex = this.teachers.findIndex(
                  (x) => x.id == this.modalTeacher.id
                );

                // => TO DO
                var data = checkedCoursesArray.map(function (el, i) {
                  return {
                    id: el,
                  };
                });

                this.teachers[foundIndex].teached_courses = data;

                $("#modal_updateTeachedCourses").modal("hide");
                Swal.fire(
                  "Teacher courses saved!",
                  "Your teacher teached courses has been updated.",
                  "success"
                );
              } else {
                Swal.fire(
                  "Attention!",
                  "Error during updating teacher courses",
                  "error"
                );
              }
            } else {
              Swal.fire(
                "Attention!",
                "You don't have right to do this operation",
                "error"
              );
            }
          })
          .catch((error) => {
            Swal.fire("Error!", error.message, "error");
          });
      }
    },
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
                var foundIndex = this.bookings.findIndex((x) => x.id == id);
                this.bookings[foundIndex].deleted = true;
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
  },
  computed: {
    ...mapState(useUserStore, ["userLoggedIn", "userJwtToken"]),
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
        })
        .filter((booking) => {
          return this.selectedUser == -1
            ? true
            : booking.id_user == this.selectedUser;
        });
    },
  },
};
</script>
