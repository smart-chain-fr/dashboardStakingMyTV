
<template>
  <v-col md="12" class="container-contact" :class="classObject">
    <!-- Prends la place restante sur la row -->

    <h2 class="title-contact">Contact</h2>

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
import { mapGetters } from "vuex";

export default {
  name: "Mystakingdata",

  components: {},

  data: () => ({}),
  computed: {
    ...mapGetters(["theme"]),
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
@import "../assets/scss/variables";

.container-contact {
  /* display: auto; */

  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;

  &.dark {
    background-color: $dark-primary;

    .title-contact {
      font: normal normal bold 18px/26px Circe;
      letter-spacing: 0px;
      color: $subtitle !important;
      opacity: 1;
      text-align: center;
      border-bottom: 1px solid grey;
      padding-bottom: 5px;
    }

    p {
      font: normal normal 300 16px/33px Circe;
      letter-spacing: 0px;
      color: #ffffff;
    }

    hr {
      color: $subtitle;
    }
  }

  &.light {
    background-color: $light;

    .title-contact {
      font: normal normal bold 18px/26px Circe;
      letter-spacing: 0px;
      color: $dark-secondary !important;
      opacity: 1;
      text-align: center;
      border-bottom: 1px solid grey;
      padding-bottom: 5px;
    }

    p {
      font: normal normal 300 16px/33px Circe;
      letter-spacing: 0px;
      color: $dark-secondary;
    }

    hr {
      color: black;
    }
  }
}

.logo-position {
  justify-content: center;
}

p {
  margin-left: 10px;
}
</style>