<template>
  <v-row>
    <v-col md="12">
      <div class="container-staked" :class="classObject">
        <v-row class="justify-space-between">
          <v-col md="6" class="price-side">
            <span>{{ price_side }}</span>
          </v-col>

          <v-col md="6" class="name-side">
            <span>{{ name_side }}</span>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "StakingDataElement",
  props: ["price_side", "name_side"],
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
@import "@/assets/scss/variables";

.container-staked {
  &.dark {
    background: $dark-tertiary 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;

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
      color: #ffffff;
      opacity: 1;
    }
  }

  &.light {
    background: $light-secondary 0% 0% no-repeat padding-box;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    .price-side {
      text-align: center;
      font: normal normal bold 16px/23px Circe;
      letter-spacing: 0px;
      color: $dark-tertiary;
      opacity: 1;
      border-right: 1px solid;
    }

    .name-side {
      text-align: center;
      font: normal normal 300 18px/26px Circe;
      letter-spacing: 0px;
      color: $dark-tertiary;
      opacity: 1;
    }
  }
}
</style>