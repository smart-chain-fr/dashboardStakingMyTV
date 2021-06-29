<template>
  <v-col>
    <v-col md="3">
      <v-row>
        <Contact />
        <Faq />
      </v-row>
    </v-col>
  </v-col>
</template>

<script>
import Contact from "../components/Contact.vue";
import Faq from "../components/Faq.vue";

export default {
  name: "App",

  components: {
    Contact,
    Faq,
  },
};
</script>

<style scoped>
</style>