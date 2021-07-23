<template >
  <v-col md="12" class="container-dashboard" :class="classObject">
    <!-- Top of element : Your dashboard + Connection button -->
    <v-row class="header-staked justify-space-between">
      <v-row class="relative_position_top_title">
        <v-col md="6" class="top-alignement">
          <div class="top-alignement">
            <img
              alt="Your dashboard"
              src="../assets/Icon material-dashboard.svg"
              height="30"
              width="30"
            />
            <h2>Your dashboard</h2>
            <div v-if="isConnected" class="address">
              <p class="address">{{ address }}</p>
              <img
                class="text-white"
                src="https://img.icons8.com/material-sharp/24/000000/copy.png"
                v-clipboard:copy="address"
                @click="openToast"
              />
            </div>
          </div>
        </v-col>

        <div class="top-alignement">
          <v-col md="6" class="top-alignement align-center">
            <div class="top-icons">
              <img
                alt="Theme button"
                src="@/assets/Icon feather-sun_dark.svg"
                height="30"
                width="30"
                @click="setTheme(light)"
              />
              
              <img
                alt="Theme button"
                src="@/assets/Icon feather-moon_dark.svg"
                height="30"
                width="30"
                @click="setTheme(dark)"
              />
            </div>
            <LoginPopup />
          </v-col>
        </div>
      </v-row>
    </v-row>
    <!-- End of element : Your dashboard + Connection button -->

    <!-- Stats -->
    <v-row>
      <v-col md="4">
        <div class="title-staked">Total MYTV staked</div>
        <div class="container-staked">
          <span>11,100,100 MYTV</span>
          <span>....USD</span>
        </div>
      </v-col>

      <v-col md="4">
        <div class="title-staked">Total rewards</div>
        <div class="container-staked">
          <span>1,100,100 MYTV</span>
          <span>....USD</span>
        </div>
      </v-col>

      <v-col md="4">
        <div class="title-staked">My wallet</div>
        <div class="container-staked">
          <span>11,100,100 MYTV</span>
          <span>....USD</span>
        </div>
      </v-col>
    </v-row>
    <!-- End of Stats -->
  </v-col>
</template>

<script>
import LoginPopup from "./LoginPopup";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: { LoginPopup },
  data() {
    return {
      light: "light",
      dark:"dark"
    };
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
    },...mapActions(["setTheme"]),
  },
  computed: {
    ...mapGetters(["isConnected", "address", "theme"]),
    classObject() {
      return {
        dark: this.theme === "dark",
        light: this.theme === "light",
      };
    }
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/variables";

.container-dashboard {
  border-radius: 15px;
  opacity: 1;
  padding: 44px !important;
  margin-right: 32px;

  .header-staked {
    padding: 20px;
  }

  .address {
    display: flex;
    justify-content: center;
    align-items: center;
    text-overflow: ellipsis;
    overflow: hidden;
    // width: 180px;
  }

  .relative_position_top_title {
    justify-content: inherit;
    align-items: center;
  }

  div.address p {
    display: flex;
    margin: auto;
    margin-left: 30px;
    margin-right: 10px;
  }

  &.dark {
    background-color: $dark-primary;

    h2 {
      color: $light;
    }

    .title-staked {
      display: flex;
      justify-content: flex-end;
      margin-right: 32px;
      font: normal normal bold 16px/23px Circe;
      letter-spacing: 0px;
      color: $subtitle;
    }

    .address{
      color: white;
    }

    .container-staked {
      background: $dark-tertiary 0% 0% no-repeat padding-box;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
        
    }

    span {
      font: normal normal 300 18px/26px Circe;
      letter-spacing: 0px;
      color: $light;
      margin-right: 12px;
    }
  }

  &.light {
    background-color: $light;

    h2 {
      color: $dark-primary;
    }

    .address{
      color: black;
    }

    .container-staked {
      background: $light-secondary 0% 0% no-repeat padding-box;
      border-radius: 10px;
      padding: 20px;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
    }
  }

  .title-staked {
      display: flex;
      justify-content: flex-end;
      margin-right: 32px;
      font: normal normal bold 16px/23px Circe;
      letter-spacing: 0px;
      color: $light-subtitle;
    }

    span {
      font: normal normal 300 18px/26px Circe;
      letter-spacing: 0px;
      color: $light-tertiary;
      margin-right: 12px;
     
    }

}

.top-alignement {
  display: flex;
  justify-content: space-between;
}

.top-icons {
  display: flex;
  justify-content: space-between;
  margin-right: 24px;
}

img {
  margin-right: 10px;
}
</style>