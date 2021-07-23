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
  padding: 0 31px !important;
  flex-direction: row;
//  margin: 0px;
  height: 100%;
  align-items: center;
  
 
  &.dark {
    background: $dark-app-background;
  }
  &.light {
    background: $light-app-background;
  }
}
</style>