<template>
  <v-col md="8" class="container-staking">
    <v-col>
      <!-- Top of element : Your dashboard + Connection button -->
      <v-row class="justify-space-between header-staked">
        <v-row>
          <img
            alt="Your dashboard"
            src="../assets/Groupe 469.svg"
            height="30"
            width="30"
          />
          <h2>My staking data</h2>
        </v-row>
      </v-row>
      <!-- End of element : Your dashboard + Connection button -->

      <!-- Stats -->
      <v-row>
        <v-col md="6">
          <div class="container-staked">
            <span>-.,..$</span>
            <span>MYTV RATE</span>
          </div>
        </v-col>
      </v-row>
    </v-col>
    <v-col md="6">
      <div class="container-staked">
        <span>-.,..$</span>
        <span>TVL</span>
      </div>
    </v-col>

    <v-col md="6">
      <div class="container-staked justify-space-around">
        <span>-.,..$</span>
        
        <span>% supply staked</span>
      </div>
    </v-col>

    <!-- End of Stats -->
  </v-col>
</template>



<style scoped>
h2 {
  color: white;
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
  padding: 40px;
}

hr {
  color: #badeff;
}
</style>