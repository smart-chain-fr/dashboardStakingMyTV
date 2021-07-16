<template>
  <v-row class="ml-1 mt-2 mr-1 container-staking">
    <!-- margins -->

    <v-col md="4">
      <!-- Left column  -->
      <!-- 100% of the block-->
      <div>
        <v-col md="12">
          <!-- Width of objects inside column -->
          <!-- No impact because it's too little -->
          <!-- Icon + title -->
          <v-row class="justify-space-between header-staked">
            <v-row>
              <img
                alt="Your dashboard"
                src="@/assets/triangle.svg"
                height="30"
                width="30"
                class="mr-3"
              />
              <h2>My staking data</h2>
            </v-row>
          </v-row>
        </v-col>
        <!-- Icon + title  -->

        <v-col md="12">
          <!-- 100% of the half of the div -->
          <div class="staking_data_elements">
            <StakingDataElement
              :price_side="staking_data_element[0].price_side"
              :name_side="staking_data_element[0].name_side"
            />
            <StakingDataElement
              :price_side="staking_data_element[1].price_side"
              :name_side="staking_data_element[1].name_side"
            />
            <StakingDataElement
              :price_side="staking_data_element[2].price_side"
              :name_side="staking_data_element[2].name_side"
            />
          </div>
          <!-- Block stats 3 -->
        </v-col>
      </div>
    </v-col>

    <v-col md="8" class="container-staked">
      <!-- Rigth column -->
      <v-row>
        <v-col md="12">
          <p class="contract_info">Contract info</p>
        </v-col>
      </v-row>

      <ContractInfo
        :info_left="contract_data_infos[0].info_left"
        :info_right="contract_data_infos[0].info_right"
      />
      <ContractInfo
        :info_left="contract_data_infos[1].info_left"
        :info_right="contract_data_infos[1].info_right"
      />
      <ContractInfo
        :info_left="contract_data_infos[2].info_left"
        :info_right="contract_data_infos[2].info_right"
      />
      <ContractInfo
        :info_left="contract_data_infos[3].info_left"
        :info_right="contract_data_infos[3].info_right"
      />
    </v-col>

    <!-- End of Stats -->
  </v-row>
</template>

<script>
import ContractInfo from "@/components/ContractInfo.vue";
import StakingDataElement from "@/components/StakingDataElement.vue";

export default {
  name: "Mystakingdata",

  components: {
    ContractInfo,
    StakingDataElement,
  },

  data: () => ({
    contract_data_infos: [
      {
        info_left: "Market Cap",
        info_right: "300.000.000",
      },
      {
        info_left: "Total Supply",
        info_right: "390.000.000",
      },
      {
        info_left: "Address",
        info_right: "An address",
      },
      {
        info_left: "Holder",
        info_right: "1,789,492",
      },
    ],
    staking_data_element: [
      {
        price_side: ".,..$",
        name_side: "MYTV RATE",
      },
      {
        price_side: ".,..$",
        name_side: "TVL",
      },
      {
        price_side: ".,..$",
        name_side: "Supply Staked",
      },
    ],
  }),
};
</script>


<style scoped>
.contract_info {
  text-align: center;
  font: normal normal bold 18px/26px Circe;
  letter-spacing: 0px;
  color: #badeff;
  opacity: 1;
}

h2 {
  color: white;
}

.container-staking {
  background-color: #253261;
  border-radius: 15px;
  opacity: 1;
  padding: 16px !important;
  margin: 10px;
}

span {
  color: #badeff;
  font-weight: 300;
  text-align: right;
}

.title-staked {
  margin-left: 55%;
}

.container-staked {
  background: #10183b 0% 0% no-repeat padding-box;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.v-btn {
  border: 2px solid #2e86ff;
  border-radius: 50px;
  color: white !important;
  background-color: #253261 !important;
}

.header-staked {
  padding: 20px;
}

hr {
  color: #badeff;
}

.staking_data_elements{
  margin-bottom: -35px;
}
</style>