<template>
  <div id="add_event" class="modal custom-modal fade" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">LOGIN</h4>
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <div
            v-show="showAlertMessage"
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Attention!</strong> {{ AlertMessage }}.
            <button
              type="button"
              class="btn-close"
              @click.prevent="resetAlertMessage"
            ></button>
          </div>
          <vee-form :validation-schema="loginSchema" @submit="login">
            <div class="form-group">
              <label>Username<span class="text-danger">*</span></label>
              <vee-field
                name="username"
                type="text"
                class="form-control"
                placeholder="Enter Username"
              />
              <ErrorMessage class="veeinvalid" name="username" />
            </div>
            <div class="form-group">
              <label>Password <span class="text-danger">*</span></label>
              <vee-field
                name="password"
                type="password"
                class="form-control"
                placeholder="Password"
                autocomplete="on"
              />
              <ErrorMessage class="veeinvalid" name="password" />
            </div>
            <div class="submit-section">
              <button type="submit" class="btn btn-primary submit-btn">
                Login
              </button>
            </div>
          </vee-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import useUserStore from "@/stores/user";

export default {
  name: "AuthModal",
  components: {},
  data() {
    return {
      loginSchema: {
        username: "required",
        password: "required|min:5|max:100",
      },
      showAlertMessage: false,
      AlertMessage: "",
      options: {
        minimizable: false,
        playerSize: "standard",
        backgroundColor: "#fff",
        backgroundStyle: "color",
        theme: {
          controlsView: "standard",
          active: "light",
          light: {
            color: "#3D4852",
            backgroundColor: "#fff",
            opacity: "0.7",
          },
          dark: {
            color: "#fff",
            backgroundColor: "#202020",
            opacity: "0.7",
          },
        },
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, {
      processLogin: "login",
    }),
    async login(values, { resetForm }) {
      let clientResponse = await this.processLogin(values);
      if (clientResponse != "") {
        this.showAlertMessage = true;
        this.AlertMessage = clientResponse;
        resetForm();
        return;
      }

      /*if (response.data.authError != "") {
        console.log("SHOW ERROR");
      }*/
      window.location.reload();
    },
    resetAlertMessage() {
      (this.showAlertMessage = false), (this.AlertMessage = "");
    },
  },
};
</script>
