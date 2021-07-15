<template>
  <div>
    <v-row>
      <v-col md="12">
        <v-row class="staking-block">
          <img
            alt="Monitoring"
            src="@/assets/Icon material-dashboard.svg"
            height="30"
            width="30"
            class="mr-3"
          />
          <p class="staking-title">Your staking offers</p>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="tab">
        <v-col md="12">
        <v-data-table
            :headers="headers"
            :items="stakes"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>
        </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "StakeManage",

  data() {
    return {
       headers: [
          {
            text: 'Pack',
            align: 'start',
            sortable: false,
            value: 'pack',
          },
          { text: 'MYTV stake', value: 'mytv_stake' },
          { text: 'Duration (days)', value: 'duration' },
          { text: 'Redemption date', value: 'redemption_date' },
          { text: 'Annualized Interest Rate', value: 'annualized_interest_rate' },
          { text: 'MyTV earned', value: 'mytv_earned' },
          { text: 'Operation', value: 'operation' },
        ],
        stakes: [
          {
            pack: 'Pack 3, 360j',
            mytv_stake: 120980.00,
            duration: 6,
            redemption_date: "2022-12-23",
            annualized_interest_rate: '6.48%',
            mytv_earned: '0.783563',
            Operation: "Mettre boutons"
          },
          {
            pack: 'Pack 1, 30j',
            mytv_stake: 1310.00,
            duration: 12,
            redemption_date: "2021-06-10",
            annualized_interest_rate: '6.48%',
            mytv_earned: '0.783563',
            Operation: "Mettre boutons"
          },
          {
            pack: 'Pack 1, 30j',
            mytv_stake: 1310.00,
            duration: 12,
            redemption_date: "2021-06-10",
            annualized_interest_rate: '6.48%',
            mytv_earned: '0.783563',
            Operation: "Mettre boutons"
          },
        ],
      options: {
        // see the options API
      },
    };
  },
};

  
</script>

<style scoped>
.staking-block {
  margin-top: 50px;
  margin-left: 20px;
}

.staking-title {
  font: normal normal bold 22px/32px Circe !important;
  letter-spacing: 0px;
  color: #ffffff !important;
  opacity: 1;
}

th.VueTables__sortable{
    background: #253261 0% 0% no-repeat padding-box !important;
    border-radius: 15px 15px 0px 0px;
    opacity: 1;
}
</style>