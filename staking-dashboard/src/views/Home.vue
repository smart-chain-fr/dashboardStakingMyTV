<template>
  <section>
    <v-row>
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
        <v-row class="contact mr-1 ml-1">
          <Contact />
        </v-row>

        <v-row class="faq">
          <Faq />
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";
import Action from "@/components/Action.vue";
import MyStakingData from "@/components/MyStakingData.vue";
import Contact from "@/components/Contact.vue";
import Faq from "@/components/Faq.vue";

export default {
  name: "App",

  components: {
    Dashboard,
    Action,
    MyStakingData,
    Contact,
    Faq,
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
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.faq {
  margin: 0%;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  align-content: flex-start;
}
</style>