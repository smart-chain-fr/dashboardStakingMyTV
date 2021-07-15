<template >
  <v-col md="12" class="container-dashboard" :class="classObject">
    <!-- Top of element : Your dashboard + Connection button -->
    <v-row class="header-staked justify-space-between">
      <v-row>
        <v-col md="6" class="top-alignement">
          <div class="top-alignement">
            <img
              alt="Your dashboard"
              src="../assets/Icon material-dashboard.svg"
              height="30"
              width="30"
            />
            <h2>Your dashboard</h2>
            <div v-if="isConnected">
              <p>{{ address }}</p>
              <img
                class="text-white"
                src="https://img.icons8.com/material-sharp/24/000000/copy.png"
                v-clipboard:copy="address"
                @click="openToast"
              />
            </div>
          </div>
        </v-col>

        <v-col md="6" class="top-alignement">
          <div class="top-alignement">
            <img
              alt="Theme button"
              src="../assets/Icon feather-sun.svg"
              height="30"
              width="30"
            />
            <strong>/</strong>
            <img
              alt="Theme button"
              src="../assets/Icon feather-moon.svg"
              height="30"
              width="30"
            />
          </div>
          <LoginPopup />
        </v-col>
      </v-row>
    </v-row>
    <!-- End of element : Your dashboard + Connection button -->

    <!-- Stats -->
    <v-row>
      <v-col md="4">
        <span class="title-staked">Total MYTV staked</span>
        <div class="container-staked">
          <span>MYTV</span>
          <span>....USD</span>
        </div>
      </v-col>

      <v-col md="4">
        <span class="title-staked">Total rewards</span>
        <div class="container-staked">
          <span>MYTV</span>
          <span>....USD</span>
        </div>
      </v-col>

      <v-col md="4">
        <span class="title-staked">My wallet</span>
        <div class="container-staked">
          <span>MYTV</span>
          <span>....USD</span>
        </div>
      </v-col>
    </v-row>
    <!-- End of Stats -->
  </v-col>
</template>

<script>
import LoginPopup from "./LoginPopup";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: { LoginPopup },
  data() {
    return {};
  },
  methods: {
    openToast() {
      this.$toast.open({
        message: "Addresse copied to clipboard",
        type: "success",
        duration: 1000,
        dismissible: true,
        position: "top-right",
      });
    },
  },
  computed: {
    ...mapGetters(["isConnected", "address", "theme"]),
    classObject() {
      return {
        dark: this.theme === "dark",
        light: this.theme === "light",
      };
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/variables";

.container-dashboard {
  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;
  margin-right: 20px;

  .header-staked {
    padding: 20px;
  }

  &.dark {
    background-color: $dark;

    h2 {
      color: $light;
    }

    .title-staked {
      margin-left: 55%;
    }

    .container-staked {
      background: $dark-secondary 0% 0% no-repeat padding-box;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
  }

  &.light {
    background-color: $light;

    h2 {
      color: $dark;
    }

    .container-staked {
      background: $light-secondary 0% 0% no-repeat padding-box;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      flex-direction: column;
    }
  }

  .title-staked {
    margin-left: 55%;
  }
}

span {
  color: #badeff;
  font-weight: 300;
  text-align: right;
}

.top-alignement {
  display: flex;
  justify-content: space-between;
}

img {
  margin-right: 10px;
}
</style>