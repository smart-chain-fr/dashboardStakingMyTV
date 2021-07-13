
<template>
  <v-col md="12" class="container-faq">
    <!-- Prends la place restante sur la row -->
    <v-row class="faq_icon">
      <img src="@/assets/faq.svg" alt="Question" 
    /></v-row>

    <h2 class="title-faq">Faq</h2>

    <v-row cols="12">
      <v-col>
        <p class="mr-5 ml-5">
          Have a question ? We can help you find your answers here
        </p>
      </v-col>
    </v-row>
  </v-col>
</template>


<script>
export default {
  name: "Mystakingdata",

  components: {},

  data: () => ({
    asset: [{ faq: "@/assets/faq.svg" }],
  }),
};
</script>


<style scoped>
#title {
  text-align: left;
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff;
  opacity: 1;
}

.container-faq {
  /* display: auto; */
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;
}

p {
  font: normal normal 300 16px/33px Circe;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
  display: flex;
  justify-content: center;
}

.title-faq {
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff !important;
  opacity: 1;
  text-align: center;
  border-bottom: 1px solid grey;
  padding-bottom: 5px;
}

.faq_icon {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
}

hr {
  color: #badeff;
}

.logo-position {
  justify-content: center;
}

p {
  margin-left: 10px;
}
</style>