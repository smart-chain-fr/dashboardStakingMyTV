<template>
  <v-col md="12" class="container-dashboard">
    <v-row class="header-staked">
      <v-row>
        <v-col md="12" class="top-alignement">
          <div class="top-alignement">
            <v-row>
              <img
                class="icon"
                alt="Your dashboard"
                src="../assets/Icon material-dashboard.svg"
                height="30"
                width="30"
              />
              <h2 class="mr-2">Your dashboard</h2>
              <p class="address mr-2" v-bind:address="address">{{ address }}</p>
              <img
                src="https://img.icons8.com/material-sharp/24/000000/copy.png"
                v-clipboard:copy="address"
                @click="openToast"
              />

              <div class="top-alignement">
                <img
                  alt="Theme button light"
                  src="../assets/Icon feather-sun.svg"
                  height="30"
                  width="30"
                />

                <strong>/</strong>

                <img
                  alt="Theme button dark"
                  src="../assets/Icon feather-moon.svg"
                  height="30"
                  width="30"
                />
              </div>

              <!-- else show logout btn -->

              <v-btn class="connect_wallet"> Logout </v-btn>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: "TopbarLayout",
  props: ["address"],
  components: {},
  data() {
    return {};
  },
  methods: {
    openToast() {
      this.$toast.open({
        message: "Addresse copied to clipboard",
        type: "success",
        duration: 5000,
        dismissible: true,
        position: "top-right",
      });
    },
  },
};
</script>

<style scoped>
.container-dashboard {
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;
  margin-right: 20px;
  margin-left: 10px;
  color: white !important;
}

.header-staked {
  padding: 20px;
}

.top-alignement {
  display: flex;
  justify-content: space-between;
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
</style>