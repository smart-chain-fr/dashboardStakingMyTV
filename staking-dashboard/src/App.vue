<template>
  <v-app>
    <v-main>
      <v-layout row wrap>
        <v-col cols="12" md="12">
          <v-flex md="8">
            <Dashboard />
          </v-flex>
          <v-flex md="4">
            <Action />
          </v-flex>
        </v-col>
------------------------
        <Contact />
        <Test />
      </v-layout>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import Action from "./components/Action.vue";
import Contact from "./components/Contact.vue";
import Test from "./components/Test.vue";

export default {
  name: "App",

  components: {
    Dashboard,
    Action,
    Contact,
    Test,
  },

  data: () => ({
    //
  }),
};
</script>
