<template>
  <v-col md="12">
    <v-row>
      <v-col md="6">
        <router-link :to="{name: 'Home'}" class="dashboard_button"> <v-icon>mdi-chevron-left</v-icon> Back to dashboard </router-link>
      </v-col>
      <v-col md="6" class="container-dashboard">
        <v-row class="header-staked align-center justify-space-between">
            <div>
              <v-row>
                <img
                  class="icon"
                  alt="Your dashboard"
                  src="@/assets/Icon material-dashboard.svg"
                  height="30"
                  width="30"
                />
                <h2 class="mr-2">Your dashboard</h2>
              </v-row>
            </div>
            <div>
              <v-row>
                <p class="address mr-4">
                  {{ address }}
                </p>
                <img
                  class="text-white"
                  src="https://img.icons8.com/material-sharp/24/000000/copy.png"
                  v-clipboard:copy="address"
                  @click="openToast"
                />
              </v-row>
            </div>
            <div>
              <v-row class="justify-space-between">
                <div class="container_icons">
                  <img
                    alt="Theme button light"
                    src="@/assets/Icon feather-sun.svg"
                    height="30"
                    width="30"
                    class="mr-3"
                  />

                  <strong>/</strong>

                  <img
                    alt="Theme button dark"
                    src="@/assets/Icon feather-moon.svg"
                    height="30"
                    width="30"
                    class="ml-3"
                  />
                </div>
                <div class="ml-5" >
                  <!-- else show logout btn -->
                  <v-btn class="connect_wallet" v-if=isConnected>
                    Logout
                  </v-btn>
                </div>
              </v-row>
            </div>
        </v-row>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Navigation",
  props: {
    
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
    ...mapGetters(['isConnected','address'])
  }
};
</script>

<style scoped>
.container-dashboard {
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  color: white !important;
}

.container_icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

i.v-icon.v-icon {
  color: white;
} 

.header-staked {
  margin: 30px;
}

.icon {
  margin-right: 10px;
}

.address {
  text-align: left;
  text-decoration: underline;
  font: normal normal 300 16px/23px Circe;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
}

.connect_wallet {
  display: flex;
  justify-content: flex-end;
  border: 2px solid #2e86ff;
  border-radius: 15px;
  color: white !important;
  background-color: #253261 !important;
  padding: 60px;
}

.v-application p {
  margin-bottom: 0px;
}

.top-alignement {
  display: flex;
  justify-content: space-between;
}

.dashboard_button {
  border: 2px solid #2e86ff;
  border-radius: 40px;
  opacity: 1;
  text-align: left;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #ffffff !important;
  text-transform: uppercase;
  background-color: #253261 !important;
  padding: 10px;
}
</style>