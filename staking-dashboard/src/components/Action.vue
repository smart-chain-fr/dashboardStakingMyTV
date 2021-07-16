<template>
  <v-col md="12" class="container-action">
    <h2 class="title-action">Action</h2>

    <!--  Border botton possible -->
    <br />
    <v-row>
      <v-col md="12">
        <div v-if="isConnected">
          <router-link :to="{ name: 'stake-manage' }" class="mystake mb-5" block
            >My Stake
          </router-link>
        </div>

        <div v-else>
          <v-btn class="mystake mb-5" block disabled>My Stake </v-btn>
        </div>

        <div v-if="isConnected">
          <router-link :to="{ name: 'stake-home' }" class="stake" block>
            Stake
          </router-link>
        </div>
        <div v-else>
          <v-btn class="stake mb-5" block disabled>Stake </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Action",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["isConnected"]),
  },
};
</script>


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

.mystake {
  background: transparent linear-gradient(270deg, #56c1f0 0%, #4733c0 100%) 0%
    0% no-repeat padding-box;
  border-radius: 60px;
  opacity: 1;
  text-align: center;
  font: normal normal bold 16px/23px Circe;
  letter-spacing: 0px;
  color: #ffffff !important;
  text-transform: uppercase;
  display: block;
}

.stake {
  background: transparent linear-gradient(90deg, #56c1f0 0%, #4733c0 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 60px;
  opacity: 1;
  text-align: center;
  font: normal normal bold 16px/23px Circe;
  letter-spacing: 0px;
  color: #ffffff !important;
  text-transform: uppercase;
  opacity: 1;
  display: block;
}

.title-action {
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff !important;
  opacity: 1;
  text-align: center;
  border-bottom: 1px solid grey;
  padding-bottom: 5px;
}

.container-action {
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  margin-bottom: 17px !important;
}
</style>