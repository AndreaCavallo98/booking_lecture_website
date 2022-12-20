<template>
  <div class="main-wrapper">
    <!-- Page Content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            <div class="stickyside">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title mb-0">Drag & Drop Event</h4>
                </div>
                <div class="card-body">
                  <div id="calendar-events" class="mb-3">
                    <div class="calendar-events" data-class="bg-info">
                      <i class="fas fa-circle text-info"></i> Available
                    </div>
                    <div class="calendar-events" data-class="bg-danger">
                      <i class="fas fa-circle text-danger"></i> Not available
                    </div>
                    <div class="calendar-events" data-class="bg-warning">
                      <i class="fas fa-circle text-warning"></i> Booked
                    </div>
                  </div>
                  <div class="checkbox mb-3">
                    <input id="drop-remove" type="checkbox" />
                    <label class="ms-1" for="drop-remove">
                      Remove after drop
                    </label>
                  </div>
                  <a
                    href="javascript:void(0);"
                    data-bs-toggle="modal"
                    data-bs-target="#add_new_event"
                    class="btn btn-primary w-100"
                  >
                    <i class="fas fa-plus"></i> Add Category
                  </a>
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
  </div>
</template>

<script>
import axios from "axios";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import eventvm from "@/views/eventvm.json";
import momentPlugin from '@fullcalendar/moment';

import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "Booklecture",
  components: {
    FullCalendar,
  },
  created() {
    let param = this.$route.params.id;
    let userIdStore = this.userId;
    let userJwtTokenStore = this.userJwtToken;
    console.log(userJwtTokenStore);
    this.calendarOptions.events = async function (
      info,
      successCallback,
      failureCallback
    ) {

      let date = new Date(info.start);
      let year_start = date.getFullYear();
      let month_start = date.getMonth()+1;
      let dt_start = date.getDate();

      if (dt_start < 10) {
        dt_start = '0' + dt_start;
      }
      if (month_start < 10) {
        month_start = '0' + month_start;
      }

      date = new Date(info.end);
      let year_end = date.getFullYear();
      let month_end = date.getMonth()+1;
      let dt_end = date.getDate();

      if (dt_end < 10) {
        dt_end = '0' + dt_end;
      }
      if (month_end < 10) {
        month_end = '0' + month_end;
      }


      await axios
        .get(
          "http://localhost:8080/Prenotazioni0_war_exploded/ServletCalendar?type=weekly&teacherid=" +
            param +
            "&startday=" +
            year_start+'/' + month_start + '/'+dt_start +
            "&endday=" +
            year_end+'/' + month_end + '/'+dt_end +
            "&userid=" +
            userIdStore,
          {
            headers: {
              "Authorization": userJwtTokenStore,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          //console.log(response.data);
          successCallback(
            response.data.map(function (eventEl) {

              var newdate = eventEl.date.split("/").reverse().join("/").replaceAll("/", "-");;
              console.log(newdate + "T" + eventEl.from.toString() + ":00:00",);
              return {
                title: "ah",
                start: newdate + "T" + eventEl.from.toString() + ":00:00",
                editable: false,
                backgroundColor: eventEl.avaliable ? "#80ffaa" : "red",
                textColor: "black",
                available: eventEl.avaliable,
                allDay: false
              };
            })
          );
        })
        .catch((error) => {

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
    dateStringFromFullCalendar(isoDate){

    }
  },
  data() {
    return {
      eventss: [
        {
          // this object will be "parsed" into an Event Object
          title: "The Title", // a property!
          start: "2018-09-01", // a property!
          end: "2018-09-02", // a property! ** see important note below about 'end' **
        },
      ],
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin, // needed for dateClick
          momentPlugin
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek",
        },
        eventClick: function (info) {
          info.jsEvent.preventDefault(); // don't let the browser navigate
          console.log(info.event.extendedProps);

          //console.log(this.$route.params.id);
          //console.log(info.event.available);
        },
        eventTimeFormat: { // like '14:30:00'
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          meridiem: false
        },
        //events: ,
        /*events: [
            '/myfeed.php'
          {
            title: "10.02p Test Event 1",
            start: "2020-08-29",
          },
          {
            title: "7.55p Test Event 3",
            start: "2020-09-02",
          },

        ],*/

        initialView: "timeGridWeek",
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
    };
  },
  computed: {
    ...mapState(useUserStore, ["userId", "userJwtToken"]),
  },
};
</script>
