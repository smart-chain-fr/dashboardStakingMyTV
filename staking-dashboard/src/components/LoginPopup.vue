<template>
  <v-row class="flex_row">
    <v-dialog v-model="dialog" max-width="300">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-if="isConnected"
          class="connect_wallet"
          @click="setConnected(false)"
        >
          Logout
        </v-btn>

        <!-- if not logged -->
        <v-btn
          v-else-if="isConnected === false"
          v-bind="attrs"
          v-on="on"
          class="connect_wallet"
        >
          Connect Wallet
        </v-btn>
      </template>

      <!-- Card appears when click on Connect wallet btn -->
      <v-card>
        <v-col class="connect_card" md="12">
          <v-row class="align-center">
            <h3 class="title_connect">Connect to a wallet</h3>
            <v-card-actions>
              <v-btn
                class="close_dialog_btn"
                icon
                x-small
                @click="dialog = false"
              >
                x
              </v-btn>
            </v-card-actions>
          </v-row>

          <v-col md="12">
            <v-btn @click="setConnected(true)" class="connect_wallet justify-center mt-4 mb-4" block>
              <img
                alt="Theme button"
                src="../assets/metamask.svg"
                height="30"
                width="30"
                
              />Metamask</v-btn
            >

            <v-btn @click="setConnected(true)" class="connect_wallet justify-center mt-4 mb-4" block>
              <img
                alt="Theme button"
                src="../assets/trustwallet.svg"
                height="30"
                width="30"
              />Trust Wallet</v-btn
            >

            <v-btn @click="setConnected(true)" class="connect_wallet justify-center mt-4 mb-4" block>
              <img
                alt="Theme button"
                src="../assets/ledger.svg"
                height="30"
                width="30"
              />Ledger</v-btn
            >

            <v-btn @click="setConnected(true)" class="connect_wallet justify-center mt-4 mb-4" block>
              <img
                alt="Theme button"
                src="../assets/walletconnect.svg"
                height="30"
                width="30"
              />Wallet Connect</v-btn
            >
          </v-col>
        </v-col>
      </v-card>
      <!-- End of card -->
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginPopup",
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    ...mapActions(["setConnected"]),
  },
  computed: {
    ...mapGetters(["isConnected"]),
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

/* .v-btn {
  display: block;
  border: 1px solid #2e86ff;
  border-radius: 60px;
  opacity: 1;
  margin-top: 10px;
} */

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

.flex_row {
  display: flex;
  justify-content: flex-end;
}

.close_dialog_btn {
  background: #badeff 0% 0% no-repeat padding-box;
}

.v-btn {
  display: block;
  text-align: left;
}
</style>