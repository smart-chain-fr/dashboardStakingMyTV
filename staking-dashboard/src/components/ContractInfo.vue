<template>
  <v-row>
    <v-row class="align-center justify-center infos" :class="classObject">
      <v-col md="4">
        <p class="info_left">{{ info_left }}</p>
      </v-col>
      <v-col md="4">
        <p class="midline"></p>
      </v-col>
      <v-col md="4">
        <p class="info_right">{{ info_right }}</p>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ContractInfo",
  props: ["info_left", "info_right"],
  components: {},

  data: () => ({}),
  methods: {},
  computed: {
    ...mapGetters(["theme"]),
    classObject() {
      return {
        dark: this.theme === "dark",
        light: this.theme === "light",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.infos {
  &.dark {
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
  }

  &.light {
    .info_left {
      text-align: center;
      font: normal normal bold 16px/23px Circe;
      letter-spacing: 0px;
      color: black;
      opacity: 1;
    }

    .info_right {
      text-align: center;
      font: normal normal 300 16px/23px Circe;
      letter-spacing: 0px;
      color: black;
    }

    .midline {
      /* height: 10px; */
      border: 1px solid black;
    }
  }
}
</style>