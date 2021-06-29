<template >
  <v-col md="8" class="container-dashboard">
    
    <!-- Top of element : Your dashboard + Connection button -->
    <v-row class="header-staked justify-space-between">
      <v-row>
        <v-col md="6" class="top-alignement">

          <div class="top-alignement">
            <img
            alt="Your dashboard"
            src="../assets/Icon material-dashboard.svg"
            height="30"
            width="30"
          />
          <h2>Your dashboard</h2>
          </div>
          
        </v-col>
     
        <v-col md="6" class="top-alignement ">

          <div class="top-alignement">
          <img
            alt="Theme button"
            src="../assets/Icon feather-sun.svg"
            height="30"
            width="30"
           
          /> 
          <strong>/</strong>
          <img
            alt="Theme button"
            src="../assets/Icon feather-moon.svg"
            height="30"
            width="30"
          />
          </div>
          <LoginPopup />
        </v-col>
      </v-row>
    </v-row>
    <!-- End of element : Your dashboard + Connection button -->

    <!-- Stats -->
    <v-row>
      <v-col md="4">
        <span class="title-staked">Total MYTV staked</span>
        <div class="container-staked">
          <span>MYTV</span>
          <span>....USD</span>
        </div>
      </v-col>

      <v-col md="4">
        <span class="title-staked">Total rewards</span>
        <div class="container-staked">
          <span>MYTV</span>
          <span>....USD</span>
        </div>
      </v-col>

      <v-col md="4">
        <span class="title-staked">My wallet</span>
        <div class="container-staked">
          <span>MYTV</span>
          <span>....USD</span>
        </div>
      </v-col>
    </v-row>
    <!-- End of Stats -->
  </v-col>
</template>

<script>

import LoginPopup from './LoginPopup';

export default{
  components: {LoginPopup},
  data(){
    return{}
  },
  
}

</script>


<style scoped>
h2 {
  color: white;
}

.container-dashboard {
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;
  margin-right: 20px;
  margin-left: 10px;
}

span {
  color: #badeff;
  font-weight: 300;
  text-align: right;
}

.title-staked {
  margin-left: 55%;
}

.container-staked {
  background: #10183b 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.header-staked {
  padding: 20px;
}

.top-alignement{
  display: flex;
  justify-content: space-between;
}

img{
  margin-right: 10px;
}
</style>