<style scoped>
/* @import "../css/dashboard.css"; */
#mystake {
  background: transparent linear-gradient(270deg, #56c1f0 0%, #4733c0 100%) 0%
    0% no-repeat padding-box;
  border-radius: 60px;
  opacity: 1;
}

#stake {
  background: transparent linear-gradient(90deg, #56c1f0 0%, #4733c0 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 60px;
  opacity: 1;
}

#title {
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff;
  opacity: 1;
}
</style>

<template>
  <div>
      <v-layout row wrap>
      <v-col cols="12" md="4">
        <v-card color="#253261" dark>
            <v-card-title>Action</v-card-title>
                <v-flex class="md-6 xs-12">
                    <v-btn outline block id="stake">Stake</v-btn>
                </v-flex>
                <v-flex class="md-6 xs-12">
                    <v-btn outline block id="mystake">My Stake</v-btn>
                </v-flex>
       </v-card>
      </v-col>
    </v-layout>
  </div>
    
 
</template>