<template>
    <v-row>
        <v-row class="align-center justify-center">
        <v-col md="4">
          <p class="info_left">{{info_left}}</p>
        </v-col>
        <v-col md="4">
          <p class="midline"></p>
        </v-col>
        <v-col md="4">
          <p class="info_right">{{info_right}}</p>
        </v-col>
      </v-row>
    </v-row>
</template>

<script>
export default {
  name: "ContractInfo",
  props: ["info_left", "info_right"],
  components: {},

  data: () => ({
   
  }),
  methods: {
    
    
  },
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
</style>