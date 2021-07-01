
<template>
  <v-row>
    <v-card class="mx-auto my-12" max-width="374">
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>{{ staking_offers_title }}</v-card-title>

      <v-divider class="mx-4"></v-divider>

      <v-card-title class="apy">APY {{ apy }}</v-card-title>

      <v-card-actions>
        <v-btn text class="btn_from_card"> Stake now --> </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>


<script>
export default {
  name: "Card",
  props: ["staking_offers_title", "apy"],
  components: {},

  data: () => ({
    //dialog: false
  }),
};
</script>

<style scoped>
.btn_from_card {
  background: transparent linear-gradient(90deg, #56c1f0 0%, #4733c0 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 60px;
  opacity: 1;
  color: white !important;
  text-align: left;
  font: normal normal bold 16px/23px Circe;
  letter-spacing: 0px;
  text-transform: uppercase;
  opacity: 1;
}

.v-card {
  background: transparent linear-gradient(142deg, #536195 0%, #222f5d 100%) 0%
    0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  text-align: left;
  font: normal normal 300 18px/26px Circe;
  letter-spacing: 0px;
  color: #ffffff !important;
}

.apy {
  border-left: 2px solid #2e86ff;
}

.stake_button {
  display: flex;
  justify-content: flex-end;
  border: 2px solid #2e86ff;
  border-radius: 15px;
  color: white !important;
  background-color: #253261 !important;
  padding: 60px;
}
</style>