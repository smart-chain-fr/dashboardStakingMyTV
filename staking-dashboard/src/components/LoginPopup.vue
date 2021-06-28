<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="290">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" class="connect_wallet">
          Connect Wallet
        </v-btn>
      </template>

      <v-card>
        <!-- <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title> -->
        <v-col class="connect_card" md="12">
          <h3 class="title_connect">Connect to a wallet</h3>

          <v-col md="8">
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
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.connect_wallet {
  border: 2px solid #2e86ff;
  border-radius: 50px;
  color: white !important;
  background-color: #253261 !important;
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
  border: 1px solid #2e86ff;
  border-radius: 60px;
  opacity: 1;
  margin-bottom: 10px;
}

.connect_card {
  background: #1f2952 0% 0% no-repeat padding-box;
  border-radius: 15px;
  opacity: 1;
}

.top-alignement {
  display: flex;
  justify-content: space-between;
}
</style>
