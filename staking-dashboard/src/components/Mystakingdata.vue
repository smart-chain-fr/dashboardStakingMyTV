<template>
  <v-row class="ml-1 mt-2 mr-1 container-staking">
    <!-- margins -->

    <v-col md="4">
      <!-- Left column  -->
      <!-- 100% of the block-->
      <div>
        <v-col md="12">
          <!-- Width of objects inside column -->
          <!-- No impact because it's too little -->
          <!-- Icon + title -->
          <v-row class="justify-space-between header-staked">
            <v-row>
              <img
                alt="Your dashboard"
                src="../assets/triangle.svg"
                height="30"
                width="30"
              />
              <h2>My staking data</h2>
            </v-row>
          </v-row>
        </v-col>
        <!-- Icon + title  -->

        <v-col md="12" class="">
          <!-- 100% of the half of the div -->
          <!-- Block stats 1 -->

          <v-row>
            <v-col md="12">
              <div class="container-staked">
                <v-row class="justify-space-between">
                  <v-col md="6" class="price-side">
                    <span>-.,..$</span>
                  </v-col>

                  <v-col md="6" class="name-side">
                    <span>MYTV RATE</span>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>

          <!-- Block stats 1 -->

          <!-- Icon + title  -->

          <!-- Block stats 2 -->

          <v-row>
            <v-col md="12">
              <div class="container-staked">
                <v-row class="justify-space-between">
                  <v-col md="6" class="price-side">
                    <span>-.,..$</span>
                  </v-col>

                  <v-col md="6" class="name-side">
                    <span>TVL</span>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>

          <!-- Block stats 2 -->

          <!-- Icon + title  -->

          <!-- Block stats 3 -->

          <v-row>
            <v-col md="12">
              <div class="container-staked">
                <v-row class="justify-space-between">
                  <v-col md="6" class="price-side">
                    <span>12</span>
                  </v-col>

                  <v-col md="6" class="name-side">
                    <span>Supply Staked</span>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>

          <!-- Block stats 3 -->
        </v-col>
      </div>
    </v-col>

    <v-col md="8" class="container-staked">
      <!-- Rigth column -->
      <v-row>
        <v-col md="12">
          <p class="contract_info">Contract info</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="4">
          <p class="info_left">Market Cap</p>
        </v-col>
        <v-col md="4">
          <p class="midline"></p>
        </v-col>
        <v-col md="4">
          <p class="info_right">300,000,000</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="4">
          <p class="info_left">Total supply</p>
        </v-col>
        <v-col md="4">
          <p class="midline"></p>
        </v-col>
        <v-col md="4">
          <p class="info_right">390,000,000</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col md="4">
          <p class="info_left">Address</p>
        </v-col>
        <v-col md="4">
          <p class="midline"></p>
        </v-col>
        <v-col md="4">
          <p class="info_right">An Adress</p>
        </v-col>
      </v-row>

      <v-row class="">
        <v-col md="4">
          <p class="info_left">Holder</p>
        </v-col>
        <v-col md="4">
          <div class="midline"></div>
        </v-col>
        <v-col md="4">
          <p class="info_right">1,789,492</p>
        </v-col>
      </v-row>
    </v-col>

    <!-- End of Stats -->
  </v-row>
</template>

<script>
export default {
  name: "Mystakingdata",

  components: {
    
  },

  data: () => ({}),
};
</script>


<style scoped>
.info_left {
  text-align: center;
  font: normal normal bold 16px/23px Circe;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.info_right {
  text-align: center;
  font: normal normal 300 16px/23px Circe;
  letter-spacing: 0px;
  color: #ffffff;
}

.midline {
  /* height: 10px; */
  border: 1px solid white;
}
.contract_info {
  text-align: center;
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff;
  opacity: 1;
}

h2 {
  color: white;
}

.price-side {
  text-align: center;
  font: normal normal bold 16px/23px Circe;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  border-right: 1px solid;
}

.name-side {
  text-align: center;
  font: normal normal 300 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff;
  opacity: 1;
}
.container-staking {
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;
  margin: 10px;
}

span {
  color: #badeff;
  font-weight: 300;
  text-align: right;
}

.title-staked {
  margin-left: 55%;
}

.container-staked {
  background: #10183b 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.v-btn {
  border: 2px solid #2e86ff;
  border-radius: 50px;
  color: white !important;
  background-color: #253261 !important;
}

.header-staked {
  padding: 20px;
}

hr {
  color: #badeff;
}
</style>