<template>
  <v-row>
    <v-col md="12">
      <div class="container-staked">
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
export default {
  name: "StakingDataElement",
  props: ["price_side", "name_side"],
  components: {},

  data: () => ({}),
  methods: {},
};
</script>

<style scoped>
.container-staked {
  background: #10183b 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
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
  color: #ffffff;
  opacity: 1;
}
</style>