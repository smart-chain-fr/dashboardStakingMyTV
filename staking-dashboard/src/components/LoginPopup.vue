<template>
  <v-row class="flex_row" :class="classObject">
    <v-dialog v-model="dialog" max-width="400">
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
      <v-card :class="classObject" class="rounded-xl">
        <v-col class="connect_card" md="12">
          <v-row class="align-center title-popin">
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

          <v-col md="10" class="mt-5">
            <v-btn
              @click="setConnected(true)"
              class="connect_wallet justify-center mt-4 mb-4"
              block
            >
              <img
                alt="Theme button"
                src="../assets/metamask.svg"
                height="30"
                width="30"
              />Metamask</v-btn
            >

            <v-btn
              @click="setConnected(true)"
              class="connect_wallet justify-center mt-4 mb-4"
              block
            >
              <img
                alt="Theme button"
                src="../assets/trustwallet.svg"
                height="30"
                width="30"
              />Trust Wallet</v-btn
            >

            <v-btn
              @click="setConnected(true)"
              class="connect_wallet justify-center mt-4 mb-4"
              block
            >
              <img
                alt="Theme button"
                src="../assets/ledger.svg"
                height="30"
                width="30"
              />Ledger</v-btn
            >

            <v-btn
              @click="setConnected(true)"
              class="connect_wallet justify-center mt-4 mb-4"
              block
            >
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
    ...mapGetters(["isConnected", "theme"]),

    classObject() {
      return {
        dark: this.theme === "dark",
        light: this.theme === "light",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";

img {
  margin-right: 5px;
}

.v-card {
  .title-popin {
    display: flex;
    justify-content: center;
    width: 80%;
    padding: 10px;

    h3 {
      font-weight: 300;
    }
  }

  .connect_card {
    border-radius: 15px;
    opacity: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .close_dialog_btn {
    position: absolute;
    right: 50px;
  }

  .connect_wallet {
    display: flex;
    justify-content: flex-end;
    border-radius: 40px;
    padding: 25px!important;
    border: 2px solid $border-blue;
  }

  &.light {
    background-color: $light !important;

    .title-popin {
      color: $dark-secondary;
      border-bottom: 1px solid $dark-secondary;
    }

    .close_dialog_btn {
      color: $dark-secondary;
      border: 1px solid $dark-secondary;
    }

    .connect_wallet {
      color: $dark-secondary;
    }
  }

  &.dark {
    background-color: $dark-primary !important;

    .title-popin {
      color: $light-secondary;
      border-bottom: 1px solid $light-secondary;
    }

    .close_dialog_btn {
      color: $light;
      border: 1px solid $light-secondary;
    }

    .connect_wallet {
      background-color: $dark-primary;
      color: $light-secondary;
    }
  }
}

.flex_row {
  display: flex;
  justify-content: flex-end;

  .connect_wallet {
    display: flex;
    justify-content: flex-end;
    border: 2px solid $border-blue;
    border-radius: 40px;
    color: $light !important;
    padding: 20px;
  }

  &.dark {
    .close_dialog_btn {
      background: #badeff 0% 0% no-repeat padding-box;
    }

    .connect_wallet {
      background-color: $dark-primary;
    }

    .title_connect {
      text-align: center;
      font: normal normal bold 18px/26px Circe;
      letter-spacing: 0px;
      color: $subtitle;
      opacity: 1;
      border-bottom: 1px solid black;
      opacity: 0.65;
    }
  }

  &.light {
    .close_dialog_btn {
      background: #badeff 0% 0% no-repeat padding-box;
    }

    .connect_wallet {
      display: flex;
      justify-content: flex-end;
      border: 2px solid $border-blue;
      border-radius: 40px;
      color: black !important;
      background-color: $light !important;
      padding: 20px;
    }

    .title_connect {
      text-align: center;
      font: normal normal bold 18px/26px Circe;
      letter-spacing: 0px;
      color: $light-popup-title;
      opacity: 1;
      border-bottom: 1px solid #545b7a;
      opacity: 0.65;
    }
  }
}

// .v-btn {
//   display: block;
//   text-align: left;
// }
</style>