<template>
  <v-col md="12" class="container-action" :class="classObject">
    <h2 class="title-action">Action</h2>

    <!--  Border botton possible -->
    <br />
    <v-row class="full-height">
      <v-col md="12" class="container_button">
        <router-link v-if="isConnected" :to="{ name: 'stake-manage' }"
          ><v-btn class="mystake mb-5" block>Stake </v-btn>
        </router-link>

        <v-btn v-else class="mystake mb-5" block disabled>My Stake </v-btn>

        <router-link v-if="isConnected" :to="{ name: 'stake-home' }">
          <v-btn class="stake mb-5" block>My Stake </v-btn>
        </router-link>
        <v-btn v-else class="stake mb-5" block disabled>Stake </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Action",
  data() {
    return {};
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

.container-action {
  border-radius: 15px;
  opacity: 1;
  margin-bottom: 10px !important;
  display: flex;
  align-items: center;
  flex-direction: column;

  .full-height {
    height: 80% !important;
    width: 100%;
    margin: 0;
  }

  .container_button {
    .mystake {
      background: transparent linear-gradient(270deg, #56c1f0 0%, #4733c0 100%)
        0% 0% no-repeat padding-box;
      border-radius: 60px;
      opacity: 1;
      text-align: center;
      font: normal normal bold 16px/23px Circe;
      letter-spacing: 0px;
      color: $light !important;
      text-transform: uppercase;
      display: block;
      height: 60px;
    }

    .stake {
      background: transparent linear-gradient(90deg, #56c1f0 0%, #4733c0 100%)
        0% 0% no-repeat padding-box;
      border-radius: 60px;
      opacity: 1;
      text-align: center;
      font: normal normal bold 16px/23px Circe;
      letter-spacing: 0px;
      color: $light !important;
      text-transform: uppercase;
      opacity: 1;
      display: block;
      height: 60px;
    }
  }

  .title-action {
    font: normal normal bold 18px/26px Circe;
    letter-spacing: 0px;
    opacity: 1;
    text-align: center;
    padding-bottom: 5px;
    width: 70%;
  }

  &.dark {
    background-color: $dark-primary;
    .title-action {
      color: $subtitle !important;
      border-bottom: 1px solid $dark-border-bottom;
    }
  }

  &.light {
    background-color: white;

    .title-action {
      color: $dark-secondary !important;
      border-bottom: 1px solid grey;
    }
  }
}

.button-row {
  display: block;
  flex-direction: column;
  padding: 10px;
}

.buttons-div {
  justify-content: center;
  align-items: center;
}

.v-col {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>