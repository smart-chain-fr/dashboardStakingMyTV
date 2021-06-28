<template>
  <v-row class="flex_row">

       <v-dialog v-model="dialog" max-width="290">
      <template v-slot:activator="{ on, attrs }">

                   

        <v-btn v-if="logged === false" v-bind="attrs" v-on="on" class="connect_wallet">
          Connect Wallet
        </v-btn>
             
              <div v-else>
                   <v-btn class="connect_wallet">
         Logout
        </v-btn>
              </div>
    
      </template>
      
    
     
   

      <v-card>
        <!-- <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title> -->
        <v-col class="connect_card" md="12">
          <h3 class="title_connect">Connect to a wallet</h3>

          <v-col md="8">
            <v-row>
              <div>
                <v-btn class="connect_wallet">
                  <img
                    alt="Theme button"
                    src="../assets/metamask.svg"
                    height="30"
                    width="30"
                  />
                  Metamask</v-btn
                >
              </div>
            </v-row>

            <v-row>
              <div>
                <v-btn class="connect_wallet">
                  <img
                    alt="Theme button"
                    src="../assets/trustwallet.svg"
                    height="30"
                    width="30"
                  />Trust Wallet</v-btn
                >
              </div>
            </v-row>
            <v-row>
              <div>
                <v-btn class="connect_wallet">
                  <img
                    alt="Theme button"
                    src="../assets/ledger.svg"
                    height="30"
                    width="30"
                  />Ledger</v-btn
                >
              </div>
            </v-row>

            <v-row>
              <div> 
                <v-btn class="connect_wallet">
                  <img
                    alt="Theme button"
                    src="../assets/walletconnect.svg"
                    height="30"
                    width="30"
                  />Wallet Connect</v-btn
                >
              </div>
            </v-row>
          </v-col>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="connect_wallet" text @click="dialog = false">
              Disagree
            </v-btn>
            <v-btn class="connect_wallet" text @click="dialog = false">
              Agree
            </v-btn>
          </v-card-actions>
        </v-col>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "LoginPopup",
  data() {
    return {
      dialog: false,
      logged: false
    };
  },
};
</script>

<style scoped>
.connect_wallet {
  display: flex;
  justify-content: flex-end;
  border: 2px solid #2e86ff;
  border-radius: 15px;
  color: white !important;
  background-color: #253261 !important;
  padding: 60px;
}

.title_connect {
  text-align: center;
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff;
  opacity: 1;
  border-bottom: 1px solid #545b7a;
  opacity: 0.65;
}

.v-btn {
  display: block;
  border: 1px solid #2e86ff;
  border-radius: 60px;
  opacity: 1;
  margin-top: 10px;
}

.connect_card {
  background: #1f2952 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  margin-right: 5px;
}

.flex_row{
    display: flex;
    justify-content: flex-end;
}
</style>