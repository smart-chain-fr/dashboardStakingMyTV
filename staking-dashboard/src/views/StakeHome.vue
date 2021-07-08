<template>
  <v-row>
    <v-row>
      <v-col md="12">
        <v-row class="staking_offers_title">
          <img
            alt="Your dashboard"
            src="../assets/triangle.svg"
            height="30"
            width="30"
          />
          <p>Your staking offers</p>
        </v-row>
      </v-col>
    </v-row>

    <v-col md="12">
      <v-row>
        <v-col md="4">
          <Card :staking_offers_title="Pack1" :apy="apy1" :days_locked="days_locked1" />
        </v-col>

        <v-col md="4">
          <Card :staking_offers_title="Pack2" :apy="apy2" :days_locked="days_locked2"/>
        </v-col>

        <v-col md="4">
          <Card :staking_offers_title="Pack3" :apy="apy3" :days_locked="days_locked3"/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

import Card from "../components/Card.vue";

export default {
  name: "Stake",
  props: ["address"],
  components: {
    Card,
  },

  data: () => ({
    Pack1: "Pack 1",
    Pack2: "Pack 2",
    Pack3: "Pack 3",
    apy1: "7%",
    apy2: "13%",
    apy3: "36%",
    days_locked1: "30",
    days_locked2: "90",
    days_locked3: "360"
  }),
};
</script>

<style scoped>

.dashboard_button {
  border: 2px solid #2e86ff;
  border-radius: 40px;
  opacity: 1;
  text-align: left;
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #ffffff;
  text-transform: uppercase;
  background-color: #253261 !important;
}

.staking_offers_title {
  margin-left: 15px;
  margin-top: 50px;
  text-align: left;
  font: normal normal bold 22px/32px Circe;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.v-application p {
  margin-bottom: 0px;
}

</style>