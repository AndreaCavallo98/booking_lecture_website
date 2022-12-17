<template>
  <!-- Search Filter -->
  <div class="card search-filter">
    <div class="card-header">
      <h4 class="card-title mb-0">Search Filter</h4>
    </div>
    <div class="card-body">
      <!-- Search -->
      <div class="card search-widget">
        <form class="search-form">
          <div class="input-group">
            <input
              type="text"
              v-model="filterSearchtext"
              @input="changeFilterSearch()"
              placeholder="Search by name or course..."
              class="form-control"
            />
            <button disabled @click.prevent="" class="btn btn-primary">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <!-- /Search -->
      <div class="filter-widget">
        <select
          class="form-select"
          @change="changeFilterCourse"
          v-model="filterSelectedCourse"
        >
          <option class="sorting" :value="-1">No course selected</option>
          <option
            class="sorting"
            :value="course.id"
            v-for="course in courses"
            :key="course.id"
          >
            {{ course.title }}
          </option>
        </select>
      </div>
      <div class="filter-widget">
        <h4>Available in date:</h4>
        <div class="cal-icon">
          <DatePicker
            reset-button
            v-model="startdate"
            @update:model-value="changeFilterDate"
            class="picker"
            :editable="true"
            :clearable="true"
            :lower-limit="currentDate"
            input-format="dd/MM/yyyy"
          />
        </div>
      </div>
      <div class="filter-widget">
        <h4>Hourly rate range:</h4>
        <vue-slider
          v-model="filterMaxHourlyRate"
          @update:model-value="changeFilterMaxHourlyRate(filterMaxHourlyRate)"
          :max="maxHoyrlyRate"
        />
      </div>
    </div>
  </div>
  <!-- /Search Filter -->
</template>

<script>
import axios from "axios";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import DatePicker from "vue3-datepicker";

import { ref } from "vue";
const currentDateGet = ref(new Date());
export default {
  name: "AppSearchSidebar",
  components: {
    DatePicker,
    VueSlider,
  },
  props: ["maxHoyrlyRate", "changeFilters"],
  data() {
    return {
      courses: [],
      currentDate: currentDateGet,

      // Filter field
      filterSearchtext: "",
      filterSelectedCourse: -1,
      startdate: null,
      filterMaxHourlyRate: 22,
    };
  },
  async created() {
    await axios
      .get("http://localhost:8080/Prenotazioni0_war_exploded/ServletCourse")
      .then((response) => {
        this.courses = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    changeFilterSearch() {
      this.changeFilters(
        this.filterMaxHourlyRate,
        this.filterSearchtext,
        this.filterSelectedCourse,
        this.startdate == null ? "" : this.formatDate(this.startdate)
      );
    },
    changeFilterCourse() {
      this.changeFilters(
        this.filterMaxHourlyRate,
        this.filterSearchtext,
        this.filterSelectedCourse,
        this.startdate == null ? "" : this.formatDate(this.startdate)
      );
    },
    changeFilterDate() {
      this.changeFilters(
        this.filterMaxHourlyRate,
        this.filterSearchtext,
        this.filterSelectedCourse,
        this.startdate == null ? "" : this.formatDate(this.startdate)
      );
    },
    changeFilterMaxHourlyRate() {
      this.changeFilters(
        this.filterMaxHourlyRate,
        this.filterSearchtext,
        this.filterSelectedCourse,
        this.startdate == null ? "" : this.formatDate(this.startdate)
      );
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
};
</script>
