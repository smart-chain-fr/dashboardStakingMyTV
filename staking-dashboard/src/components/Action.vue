<template>
  <v-col md="3" class="container-action">
    <h2 class="title-action">Action</h2>
    <hr /> <!--  Border botton possible -->
    <br />

    <v-col md="12">
      <v-btn class="mystake mb-5" block>My Stake</v-btn>

      <v-btn class="stake" block> Stake</v-btn>
    </v-col>
  </v-col>
</template>
<style scoped>
.button-row {
  display: block;
  flex-direction: column;
  padding: 10px;
}

.buttons-div {
  justify-content: center;
  align-items: center;
}

.v-col {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.v-btn {
  text-align: left;
  font: normal normal bold 16px/23px Circe;
  letter-spacing: 0px;
  color: #ffffff !important;
  text-transform: uppercase;
  opacity: 1;
}

.mystake {
  background: transparent linear-gradient(270deg, #56c1f0 0%, #4733c0 100%) 0%
    0% no-repeat padding-box;
  border-radius: 60px;
  opacity: 1;
}

.stake {
  background: transparent linear-gradient(90deg, #56c1f0 0%, #4733c0 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 60px;
  opacity: 1;
}

.title-action {
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff !important;
  opacity: 1;
  text-align: center;
}

.container-action {
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;
}
</style>