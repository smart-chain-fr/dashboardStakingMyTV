<template>
  <v-app>
    <v-main>
      <v-row>
        <v-col md="12">
          <Home />
        </v-col>
        
      </v-row>


    </v-main>
  </v-app>
</template>
`
<script>

import Home from "./views/Home.vue";

export default {
  name: "App",

  components: {
    Home
  },

  data: () => ({}),
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
  margin: 20px;
}
</style>