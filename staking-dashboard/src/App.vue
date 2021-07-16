<template>
  <v-app>
    <v-main :class="{light: isThemeLight}">
      <v-row>
        <v-col md="12">
          <router-view/>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
`
<script>

export default {
  name: "App",

  components: {
    // Stake,
  },

  data: () => ({
    address: "0x12345678901234",
    isThemeLight: false
  }),
};
</script>

<style lang="scss" scoped>
.elements {
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.v-main {
  display: flex;
  background: transparent linear-gradient(119deg, #151e41 0%, #10183b 100%) 0%
    0% no-repeat padding-box;

  &.light {
    background: transparent linear-gradient(119deg, #ced1da 0%, #10183b 100%) 0%
    0% no-repeat padding-box;
  }
  color: white;
  opacity: 1;
  padding: 31px !important;
  flex-direction: row;
  margin: 0px;
}
</style>