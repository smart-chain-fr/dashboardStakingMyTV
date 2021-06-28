
<template>
  <v-col md="12">
    <div class="container-contact">
      <h2 class="title-action">Contact</h2>
      <hr />
      <v-row cols="12">
        <v-col row="md-6">
          <br />
          <v-row cols="6" class="justify-space-around">
            <v-img
              src="../assets/Image 21.svg"
              max-width="30"
              max-height="30"
            ></v-img>
            <p>Telegram</p>
          </v-row>

          <v-row cols="6" class="justify-space-around">
            <v-img
              src="../assets/Image 22.svg"
              max-width="30"
              max-height="30"
            ></v-img>
            <p>Twitter</p>
          </v-row>
        </v-col>

        <v-col row="md-6">
          <br />
          <v-row cols="6" class="justify-space-around">
            <v-img
              src="../assets/Image 30.svg"
              max-width="30"
              max-height="30"
            ></v-img>
            <p>Discord</p>
          </v-row>

          <v-row cols="6" class="justify-space-around">
            <v-img
              src="../assets/Groupe 469.svg"
              max-width="30"
              max-height="30"
            ></v-img>
            <p>Website</p>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-col>
</template>

<style scoped>
#title {
  text-align: left;
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff;
  opacity: 1;
}

.container-contact {
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
.v-row{
  margin-right: 20px;
  margin-top: 20;
}

hr{
  color: #BADEFF;
}
</style>