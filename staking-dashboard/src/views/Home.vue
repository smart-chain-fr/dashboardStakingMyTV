<template>
  <section v-if="true" >
    <v-row> <!--  -->
      <v-col md="8">
        <Dashboard />
      </v-col>

      <v-col md="4" class="action">
        <Action />
      </v-col>
    </v-row>

    <v-row>
      <v-col md="8">
        <MyStakingData />
      </v-col>

      <v-col md="4" class="contact_and_faq">
        <v-row class="contact">
         <Contact />
        </v-row>

        <v-row class="faq">
          <Faq />
        </v-row>
      </v-col>
    </v-row>
    <pre>{{screenWidth}} x {{screenHeight}}</pre>
  </section>

  <!-- <section v-else>
    <Drawer />
  </section> -->
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
import Action from "@/components/Action.vue";
import MyStakingData from "@/components/MyStakingData.vue";
import Contact from "@/components/Contact.vue";
import Faq from "@/components/Faq.vue";
// import Drawer from "@/components/Drawer.vue";

export default {
  name: "App",

  components: {
    Dashboard,
    Action,
    MyStakingData,
    Contact,
    Faq,
    // Drawer
  },
  computed: {
    
  },

  data: () => ({}),
};
</script>

<style scoped>
.contact_and_faq {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.action {
  display: flex;
}

.contact {
  margin: 0%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-content: flex-start;
  margin-top: -12px;
  margin-bottom: 27px;
}

.faq {
  margin: 0%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-content: flex-start;
}
</style>