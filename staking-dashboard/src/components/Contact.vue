
<template>
  <v-col md="12" class="container-contact"> <!-- Prends la place restante sur la row -->
    
      <h2 class="title-action">Contact</h2>
      <hr />
      <v-row cols="12">
        <v-col row="md-6">
          <br />
          <v-row cols="6" class="logo-position">
            <v-img
              src="../assets/telegram.svg"
              max-width="30"
              max-height="30"
            ></v-img>
            <p>Telegram</p>
          </v-row>

          <v-row cols="6" class="logo-position">
            <v-img
              src="../assets/twitter.svg"
              max-width="30"
              max-height="30"
            ></v-img>
            <p>Twitter</p>
          </v-row>
        </v-col>

        <v-col row="md-6">
          <br />
          <v-row cols="6" class="logo-position">
            <v-img
              src="../assets/discord.svg"
              max-width="30"
              max-height="30"
            ></v-img>
            <p>Discord</p>
          </v-row>

          <v-row cols="6" class="logo-position">
            <v-img
              src="../assets/triangle.svg"
              max-width="30"
              max-height="30"
            ></v-img>
            <p>Website</p>
          </v-row>
        </v-col>
      </v-row>
   
  </v-col>
</template>


<script>
export default {
  name: "Mystakingdata",

  components: {
    
  },

  data: () => ({}),
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

.container-contact {
  display: auto;
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;

}

p {
  text-align: left;
  font: normal normal 300 16px/33px Circe;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}

.title-action {
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff !important;
  opacity: 1;
  text-align: center;
}

/* .v-row{
  margin-right: 20px;
  margin-top: 20px;
} */

hr{
  color: #BADEFF;
}

.logo-position{
  justify-content: center;
}

p{
  margin-left: 10px;
}
</style>