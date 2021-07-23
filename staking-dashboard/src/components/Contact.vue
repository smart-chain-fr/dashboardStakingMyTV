
<template>
  <v-col md="12" class="container-contact" :class="classObject">
    <!-- Prends la place restante sur la row -->

    <h2 class="title-contact">Contact</h2>

    <v-row cols="12" class="container_logo">
      <v-col row="md-6">
        <br />
        <v-row cols="6" class="logo-position mb-5">
          <img src="../assets/telegram.svg" />
          <p>Telegram</p>
        </v-row>

        <v-row cols="6" class="logo-position">
          <img src="../assets/twitter.svg" />
          <p>Twitter</p>
        </v-row>
      </v-col>

      <v-col row="md-6">
        <br />
        <v-row cols="6" class="logo-position mb-5">
          <img src="../assets/discord.svg" />
          <p>Discord</p>
        </v-row>

        <v-row cols="6" class="logo-position">
          <img src="../assets/triangle.svg" />
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
  border-radius: 15px;
  padding: 20px !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0;

  .title-contact {
    font: normal normal bold 18px/26px Circe;
    letter-spacing: 0px;
    text-align: center;
    padding-bottom: 5px;
    width: 70%;
  }

  .container_logo {
    padding: 0 20px;
    width: 100%;
    
  }

  p {
    font: normal normal 300 16px/33px Circe;
    letter-spacing: 0px;
  }

  &.dark {
    background-color: $dark-primary;

    .title-contact {
      color: $subtitle !important;
      border-bottom: 1px solid $dark-border-bottom;
    }

    p {
      color: #ffffff;
    }
  }

  &.light {
    background-color: $light;

    .title-contact {
      color: $dark-secondary !important;
      border-bottom: 1px solid grey;
    }

    p {
      color: $dark-secondary;
    }
  }
}

.logo-position {
  justify-content: space-evenly;
  position: relative;
  img {
    width: 35px;
    height: 35px;
    position: absolute;
    left: 10px;
  }
}

p {
  margin-left: 10px;
}
</style>