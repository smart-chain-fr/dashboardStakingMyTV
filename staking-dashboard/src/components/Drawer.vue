<template>
  <section>
    <v-container class="mt-5">
      <v-row class="justify-space-between align-items justify-center  ">
        <v-btn text color="white" dark @click.stop="drawer = !drawer" class="justify-center">
          <v-icon> mdi-menu</v-icon> Menu
        </v-btn>
    
        <div class="popup-button">
            <LoginPopup />
        </div>
        
      </v-row>

      <v-row>
        <Dashboard />
      </v-row>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <!-- <v-divider></v-divider> -->

      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="burger-menu-text">{{
              items[0].title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="burger-menu-text">{{
              items[1].title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="burger-menu-text">{{
              items[2].title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="burger-menu-text">{{
              items[3].title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <div class="top-icons">
              <img
                alt="Theme button"
                src="@/assets/Icon feather-sun_dark.svg"
                height="30"
                width="30"
                @click="setTheme(light)"
              />

              <img
                alt="Theme button"
                src="@/assets/Icon feather-sun_dark.svg"
                height="30"
                width="30"
                @click="setTheme(light)"
              />
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <Faq />
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list-item>
          <v-list-item-content>
            <Contact />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</section>
</template>

<script>
import { mapGetters } from "vuex";
import Faq from "@/components/Faq.vue";
import Contact from "@/components/Contact.vue";
import LoginPopup from "@/components/LoginPopup.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "Drawer",
  components: {
    Faq,
    Contact,
    LoginPopup,
    Dashboard
  },
  data() {
    return {
      drawer: null,
      items: [
        { title: "Your Dashboard", icon: "mdi-view-dashboard" },
        { title: "MyTV staking data", icon: "mdi-forum" },
        { title: "Offers", icon: "mdi-view-dashboard" },
        { title: "Monitoring", icon: "mdi-forum" },
      ],
    };
  },
  computed: {
    ...mapGetters(["isConnected", "theme", "height", "width"]),
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

.burger-menu-text {
  text-align: left;
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: $subtitle;
}

.v-sheet {
  background: $dark-app-background;
}

.v-navigation-drawer {
  background: $dark-app-background;
}

.v-main{
    margin: 0;
    height: 100%;
    width: 100%;
}

.popup-button{
    margin-top: 3%;
}
</style>