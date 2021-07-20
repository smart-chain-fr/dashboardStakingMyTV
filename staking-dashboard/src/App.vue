<template>
  <v-app>
    <v-main :class="classObject">
      <v-row>
        <v-col md="12">
          <router-view />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
`
<script>
import { mapGetters } from "vuex";
export default {
  name: "App",

  components: {
    // Stake,
  },
  computed: {
    ...mapGetters(["theme"]),
    classObject() {
      return {
        dark: this.theme === "dark",
        light: this.theme === "light",
      };
    },
  },

  data: () => ({
    address: "0x12345678901234",
  }),
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables";
.elements {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.v-main {
  display: flex;
  padding: 31px !important;
  flex-direction: row;
  margin: 0px;

  &.dark {
    background: $dark-app-background;
  }
  &.light {
    background: $light-app-background;
  }
}
</style>