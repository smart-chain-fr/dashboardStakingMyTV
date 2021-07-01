<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col md="12">
          <!-- <Home /> -->
          <Stake :address="address"/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
`
<script>
// import Home from "./views/Home.vue";
import Stake from "./views/Stake.vue";

export default {
  name: "App",

  components: {
    // Home
    Stake,
  },

  data: () => ({
    address: "0x12345678901234"
  }),
};
</script>

<style scoped>
.elements {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.v-main {
  display: flex;
  background: transparent linear-gradient(119deg, #151e41 0%, #10183b 100%) 0%
    0% no-repeat padding-box;
  opacity: 1;
  padding: 20px !important;
  flex-direction: row;
  margin: 0px;
}
</style>