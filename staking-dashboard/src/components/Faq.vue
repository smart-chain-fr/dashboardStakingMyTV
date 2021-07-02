<template>
  <v-col md="11" class="container-faq">
    <v-row class="logo">
      <br />
      <v-img
        src="../assets/Icon ionic-ios-help-circle.svg"
        max-width="30"
        max-height="30"
      >
      </v-img>
    </v-row>
    <h2 class="title-faq mt-4">FAQ</h2>
    <hr />
    <v-col md="12">
      <v-row class="paragraph">
        <p>Have a question ? We can help find your answers here</p>
      </v-row>
    </v-col>
    <v-row class="arrow-logo mt-4">
      <v-img src="../assets/arrow.svg" max-width="30" max-height="30"></v-img>
    </v-row>
  </v-col>
</template>


<script>
export default {
  name: "Faq",

  components: {},

  data: () => ({}),
};
</script>

<style scoped>
.logo {
  justify-content: center;
  /* align-items: center; */
}

.arrow-logo {
  position: absolute;
  bottom: 25px;
  right: 25px;
}

.paragraph {
  text-align: center;
  font: normal normal 300 16px/23px Circe;
  letter-spacing: 0px;
  color: #ffffff !important;
  opacity: 1;
}

hr {
  color: #badeff;
}

.container-faq {
  display: flex;
  flex-direction: column;
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;
  margin: 10px auto !important;
  position: relative;
}

.title-faq {
  /* display: table; */
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff !important;
  opacity: 1;
  text-align: center;
}
</style>