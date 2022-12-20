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
                      <i class="fas fa-circle text-info"></i> My Event One
                    </div>
                    <div class="calendar-events" data-class="bg-success">
                      <i class="fas fa-circle text-success"></i> My Event Two
                    </div>
                    <div class="calendar-events" data-class="bg-danger">
                      <i class="fas fa-circle text-danger"></i> My Event Three
                    </div>
                    <div class="calendar-events" data-class="bg-warning">
                      <i class="fas fa-circle text-warning"></i> My Event Four
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
                  :events="events"
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

import { mapState } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "Booklecture",
  components: {
    FullCalendar,
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
        ],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek",
        },
        eventClick: function (info) {
          info.jsEvent.preventDefault(); // don't let the browser navigate
          console.log(info.event.extendedProps);
          //console.log(info.event.available);
        },
        events: function (info, successCallback, failureCallback) {
          console.log(info.start);
          console.log(info.end);
          successCallback(
            eventvm.map(function (eventEl) {
              return {
                title: eventEl.title,
                start: eventEl.start,
                editable: eventEl.editable,
                backgroundColor: eventEl.backgroundColor,
                available: eventEl.available,
              };
            })
          );
          /*await axios.get(
            "http://localhost:8080/Prenotazioni0_war_exploded/ServletCalendar?teacherid=" +
              this.route.params.id +
              "&startday=" +
              info.start.valueOf() +
              "&endday=" +
              info.end.valueOf() +
              "&userid=" +
              this.userId,
            {
              headers: {
                Authorization: this.userJwtToken,
              },
            }
          );*/

          /*req
            .get("myxmlfeed.php")
            .type("xml")
            .query({
              start: info.start.valueOf(),
              end: info.end.valueOf(),
            })
            .end(function (err, res) {
              if (err) {
                failureCallback(err);
              } else {
                successCallback(
                  Array.prototype.slice
                    .call(
                      // convert to array
                      res.getElementsByTagName("event")
                    )
                    .map(function (eventEl) {
                      return {
                        title: eventEl.getAttribute("title"),
                        start: eventEl.getAttribute("start"),
                      };
                    })
                );
              }
            });*/
        },
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
