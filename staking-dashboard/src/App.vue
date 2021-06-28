<template>
  <v-app>
    <v-main>
      <v-row>
      
          <Dashboard />
          <Action />
        
        
        <Mystakingdata />
        
        <v-row>
          <v-col md="12">
            <v-row>
              <Contact />
              <Faq />
            </v-row>
          </v-col>
        </v-row>
      </v-row>

      <!-- <Contact />
      <Test /> -->
    </v-main>
  </v-app>
</template>
`
<script>
import Dashboard from "./components/Dashboard.vue";
import Action from "./components/Action.vue";
import Contact from "./components/Contact.vue";
import Faq from "./components/Faq.vue";
import Mystakingdata from "./components/Mystakingdata.vue";

export default {
  name: "App",

  components: {
    Dashboard,
    Action,
    Contact,
    Faq,
    Mystakingdata,
    // Test,
  },

  data: () => ({
    //
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
  margin: 20px;
}
</style>