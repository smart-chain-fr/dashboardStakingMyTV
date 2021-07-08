<template>
  <v-row>
    <v-card class="mx-auto my-12">
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>{{ staking_offers_title }}</v-card-title>

      <v-divider class="mx-4"></v-divider>
      <div>
        <span class="apy"> APY {{ apy }}</span>
        <span class="apy"> APY {{ apy }}</span>
      </div>
      <!-- <v-card-title class="apy">APY {{ apy }}</v-card-title> -->

      <v-card-actions>
        <v-dialog v-model="dialog" max-width="300">
          <template v-slot:activator="{ on, attrs }">
            <v-btn text v-bind="attrs" v-on="on" class="btn_from_card">
              Stake now -->
            </v-btn>
          </template>

          <v-card>
            <v-col md="12" class="subcard_position">
              <v-row>
                <v-col md="12">
                  <v-row>
                    <p class="stake_subcard_title">
                      {{ staking_offers_title }}
                    </p>
                  </v-row>
                  
                  <v-row>
                    <input v-model="message" placeholder="The amount" />
                    <p>Minimum 1000 MYTV ~ 100 USD</p>
                  </v-row>

                  <v-row>
                    <p>Stake date ---- {{ this.getNow() }}</p>
                  </v-row>

                  <v-row>
                    <p>Interest period {{days_locked}} days</p>
                    
                  </v-row>

                  <v-row>
                    <p>Redemption date</p>
                  </v-row>

                  <v-row>
                    <p>{{days_locked}}-Days APY</p>
                    <p>MYTV {{apy}}</p>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
  </v-row>
</template>


<script>
export default {
  name: "Card",
  props: ["staking_offers_title", "apy", "days_locked"],
  components: {},

  data: () => ({
    //dialog: false
  }),
  methods: {
    getNow: function () {
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date + " " + time;
      this.timestamp = dateTime;
    },
  },
};
</script>

<style scoped>
.subcard_position {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stake_subcard_title {
  text-align: center;
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff;
  opacity: 1;
  border-bottom: 1px solid grey;
}

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
  /* padding: 20px; */
}

.apy {
  border-left: 2px solid #2e86ff;
  margin-left: 10%;
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

input {
  background: #1f2952 0% 0% no-repeat padding-box;
  border: 2px solid #2e86ff;
  border-radius: 20px;
  opacity: 1;
  padding: 10px;
}
</style>