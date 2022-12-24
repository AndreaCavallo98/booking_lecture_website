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
                                                  @click="
                                                    udpateTeachedCourses(
                                                      teacher.id
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
  <!-- Add Dependent Modal-->
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
  <!-- /Add Dependent Modal-->

  <!-- Add Teacher Modal-->
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

  <div
    id="modal_updateTeachedCourses"
    class="modal fade custom-modal"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <vee-form :validation-schema="teacherSchema" @submit="addTeacher">
          <div class="modal-header">
            <h5 class="modal-title">Select teached courses</h5>
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
                  name="select_specialist"
                  :value="course.id"
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
            <button type="submit" class="btn btn-primary submit-btn">
              Save Teached courses
            </button>
          </div>
        </vee-form>
      </div>
    </div>
  </div>
  <!-- /Add Dependent Modal-->
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  components: {
    Swal,
  },
  mounted() {},
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

      mainSelectCourses: [],
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

                this.courses.unshift(course);

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
    async udpateTeachedCourses(id) {
      $("#modal_updateTeachedCourses").modal("show");
    },
  },
  computed: {
    ...mapState(useUserStore, ["userLoggedIn", "userJwtToken"]),
  },
};
</script>
