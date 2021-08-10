<template>
  <section v-if="true">
    <v-col md="12" class="container-faq" :class="classObject">
      <!-- Prends la place restante sur la row -->
      <v-row class="faq_icon">
        <img src="@/assets/faq.svg" alt="Question"
      /></v-row>

      <h2 class="title-faq">FAQ</h2>

      <v-row cols="12">
        <v-col>
          <span class="mr-5 ml-5">
            Have a question ? We can help you find your answers here
          </span>

          <div class="arrow">
            <router-link :to="{ name: 'stake-manage' }">
              <img src="@/assets/arrow.svg" alt="Go to FAQ" />
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </section>

  <section v-else>
    <v-row>
      <img src="@/assets/faq.svg" alt="Question" />
    </v-row>

    <v-row class="burger-menu-text"> FAQ </v-row>

    <v-row> Have a question ? We can help you find your answers here </v-row>

    <v-row>
      <div class="logo-mobile">
        <router-link :to="{ name: 'stake-manage' }">
          <img src="@/assets/arrow.svg" alt="Go to FAQ" />
        </router-link>
      </div>
    </v-row>
  </section>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Mystakingdata",

  components: {},

  data: () => ({
    asset: [{ faq: "@/assets/faq.svg" }],
  }),
  computed: {
    ...mapGetters(["theme", "width", "height"]),
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

.container-faq {
  /* display: auto; */

  border-radius: 15px;
  opacity: 1;
  padding: 20px !important;
  margin-top: -10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 120px;

  .logo-position {
    justify-content: center;
  }

  .title-faq {
    font: normal normal bold 18px/26px Circe;
    letter-spacing: 0px;
    opacity: 1;
    text-align: center;
    padding-bottom: 5px;
    width: 70%;
  }

  span {
    font: normal normal 300 16px/33px Circe;
    letter-spacing: 0px;
    opacity: 1;
    display: flex;
    justify-content: center;
  }

  &.dark {
    background-color: $dark-primary;

    span {
      color: #ffffff;
    }
    .title-faq {
      border-bottom: 1px solid $dark-border-bottom;
      color: $subtitle !important;
    }
  }

  &.light {
    background-color: $light;

    span {
      color: black;
    }

    .title-faq {
      color: $dark-secondary !important;
      border-bottom: 1px solid grey;
    }
  }
}

.faq_icon {
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}

p {
  margin-left: 10px;
}

.arrow {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

// .burger-menu-text {
//   text-align: left;
//   font: normal normal bold 18px/26px Circe;
//   letter-spacing: 0px;
//   color: $subtitle;
// }

// .logo-mobile{
//   margin-left: 10%;
// }
</style>