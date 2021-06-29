<template>
  <v-col md="12" class="container-faq">
    <v-row class="logo">
      <br>
      <v-img
        src="../assets/Icon ionic-ios-help-circle.svg"
        max-width="30"
        max-height="30"
      >
      </v-img>
    </v-row>
    <br />
    <h2 class="title-faq">FAQ</h2>
    <hr />
    <br/>
    <v-col md="12">
      <v-row class="paragraph">
        <p>Have a question ? We can help find your answers here</p>
      </v-row>
      
    </v-col>

      <v-row class="arrow-logo">
        <v-img
          src="../assets/arrow.svg"
          max-width="30"
          max-height="30"
        ></v-img>
      </v-row>
    
  </v-col>
</template>


<script>
export default {
  name: "Faq",

  components: {
    
  },

  data: () => ({}),
};

</script>

<style scoped>
.logo {
  justify-content: center;
  /* align-items: center; */
}

.arrow-logo{
  justify-content: flex-end;
}

.paragraph{
  text-align: center;
  font: normal normal 300 16px/23px Circe;
  letter-spacing: 0px;
  color: #FFFFFF !important;
  opacity: 1;
}

hr{
  color: #BADEFF;
}

.container-faq {
  display: flex;
  flex-direction: column;
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;
  /* margin: 12px; */
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