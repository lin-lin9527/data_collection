<template>
    <v-main style="background-color: rgb(144, 155, 161);">
      <v-container class="mt-5">
        <!-- ========================================= 排版1 ========================================= -->
        <v-row class="delay">
          <v-col cols="6" lg="3" md="6">
            <DataCard :info="info[1]"/>
            <div style="height:20px"></div>
            <DataCard :info="info[2]"/>
            <div style="height:20px"></div>
            <DataCard :info="info[3]"/>
            <div style="height:20px"></div>
          </v-col>
          <v-col cols="6" lg="3" md="6">
            <DataCard :info="info[4]"/>
            <div style="height:20px"></div>
            <DataCard :info="info[5]"/>
            <div style="height:20px"></div>
            <DataCard :info="info[6]"/>
            <div style="height:20px"></div>
          </v-col>
          <v-col cols="6" lg="3" md="6">
            <DataCard :info="info[7]"/>
            <div style="height:20px"></div>
          </v-col>
          <v-col cols="6" lg="3" md="6">
            <v-card style="background-color: rgb(150, 142, 133); border-radius: 20px; min-height: 240px;">
              <v-card-title>
                <v-container>
                  <v-row>
                    <v-spacer></v-spacer>
                    <h1 style="color:white">用電資訊</h1>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-container>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" lg="6" md="6" style="text-align: center;">
                    <h2 style="color:white">台電總用電</h2>
                    <div style="height: 10px;"></div>
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-img src="/ICON/plug.png"/>
                      <v-spacer></v-spacer>
                    </v-row>
                    <div style="height: 20px;"></div>
                    <h2>18.7 KW</h2>
                  </v-col>
                  <v-col cols="12" lg="6" md="6" style="text-align: center;">
                    <h2 style="color:white">IT用電</h2>
                    <div style="height: 10px;"></div>
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-img src="/ICON/plug.png"/>
                      <v-spacer></v-spacer>
                    </v-row>
                    <div style="height: 20px;"></div>
                    <h2>18.7 KW</h2>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
            <div style="height:20px"></div>
          </v-col>
        </v-row>
        <!-- ========================================= 排版2 ========================================= -->
        <!-- <v-row>
          <v-col cols="6" lg="3" md="3">
            <DataCard :info="info[1]"/>
          </v-col>
          <v-col cols="6" lg="3" md="3">
            <DataCard :info="info[4]"/>
          </v-col>
          <v-col cols="6" lg="3" md="3">
            <DataCard :info="info[7]"/>
          </v-col>
          <v-col cols="6" lg="3" md="3">
            <v-card style="background-color: rgb(150, 142, 133); border-radius: 20px; min-height: 240px;">
              <v-card-title>
                <v-container>
                  <v-row>
                    <v-spacer></v-spacer>
                    <h1 style="color:white">用電資訊</h1>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-container>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" lg="6" md="6" style="text-align: center;">
                    <h2 style="color:white">台電總用電</h2>
                    <div style="height: 10px;"></div>
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-img src="/ICON/plug.png"/>
                      <v-spacer></v-spacer>
                    </v-row>
                    <div style="height: 20px;"></div>
                    <h2>18.7 KW</h2>
                  </v-col>
                  <v-col cols="12" lg="6" md="6" style="text-align: center;">
                    <h2 style="color:white">IT用電</h2>
                    <div style="height: 10px;"></div>
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-img src="/ICON/plug.png"/>
                      <v-spacer></v-spacer>
                    </v-row>
                    <div style="height: 20px;"></div>
                    <h2>18.7 KW</h2>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" lg="3" md="3">
            <DataCard :info="info[2]"/>
          </v-col>
          <v-col cols="6" lg="3" md="3">
            <DataCard :info="info[5]"/>
          </v-col>
          <v-col cols="6" lg="3" md="3">
          </v-col>
          <v-col cols="6" lg="3" md="3">
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" lg="3" md="3">
            <DataCard :info="info[3]"/>
          </v-col>
          <v-col cols="6" lg="3" md="3">
            <DataCard :info="info[6]"/>
          </v-col>
          <v-col cols="6" lg="3" md="3">
          </v-col>
          <v-col cols="6" lg="3" md="3">
          </v-col>
        </v-row> -->
      </v-container>
    </v-main>
</template>

<script>
import DataCard from "@/components/dataCard.vue";
// Vuex
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "getData",
  mutationType: "updateData",
});
export default {
  components: {
    DataCard,
  },
  computed: {
    ...mapFields(["info"]),
  },
  data() {
    return {}
  },
  created() {
    setTimeout(() => {
      this.info[1].state = false
      this.info[1].message = "異常請注意"
      this.info[1].color = "rgb(255, 89, 89)"
      this.info[1].borderColor = "255, 89, 89"
      setTimeout(() => {
        this.info[1].state = true
        this.info[1].message = "正常運作"
        this.info[1].color = "rgb(115, 153, 92)"
        this.info[1].borderColor = "115, 153, 92"
      }, 5000);
    }, 5000);
  }
}
</script>

<style lang="scss" scoped>
@keyframes delay_status {
  0% { 
    opacity: 0;
    transform: translateX(-50px);
  }
  100% { 
    opacity: 1; 
    transform: translateX(0px);
  }
}
.delay {
  animation: delay_status 1s;
}
</style>

// info: {
//   1: {
//     title: "常溫倉",
//     icon: "/ICON/temperature-control.png",
//     state: true,
//     regularColor: "rgb(115, 153, 92)",
//     info1: "CH1 25 °C /  65.9%",
//     info2: "CH2 22 °C /  66.3%",
//   },
//   2: {
//     title: "空調",
//     icon: "/ICON/air-conditioner.png",
//     state: true,
//     regularColor: "rgb(115, 153, 92)",
//     info1: "CH3 正常運作",
//     info2: "CH4 正常運作",
//   },
//   3: {
//     title: "CO2",
//     icon: "/ICON/carbon-dioxide.png",
//     state: true,
//     regularColor: "rgb(115, 153, 92)",
//     info1: "CH5 350ppm",
//     info2: "CH6 350ppm",
//   },
//   4: {
//     title: "常溫倉",
//     icon: "/ICON/temperature-control.png",
//     state: false,
//     regularColor: "rgb(115, 153, 92)",
//     info1: "CH1 50 °C /  70.6%",
//     info2: "CH2 22 °C /  66.3%",
//   },
//   5: {
//     title: "空調",
//     icon: "/ICON/air-conditioner.png",
//     state: true,
//     regularColor: "rgb(63, 169, 245)",
//     info1: "空調A機 正常運作",
//     info2: "空調B機 正常運作",
//   },
//   6: {
//     title: "CO2",
//     icon: "/ICON/carbon-dioxide.png",
//     state: false,
//     regularColor: "rgb(115, 153, 92)",
//     info1: "CH5 1000ppm",
//     info2: "CH6 350ppm",
//   },
//   7: {
//     title: "冷凍倉",
//     icon: "/ICON/temperature-control.png",
//     state: true,
//     regularColor: "rgb(115, 153, 92)",
//     info1: "CH1 -30.2 °C",
//     info2: "CH2 -31.2 °C",
//   },
// }
// =====================================================
// info: {
//   1: {
//     title: "常溫倉",
//     icon: "/ICON/temperature-control.png",
//     message: "正常運作",
//     state: true,
//     color: "rgb(115, 153, 92)",
//     borderColor: "115, 153, 92",
//     info1: "CH1 25 °C /  65.9%",
//     info2: "CH2 22 °C /  66.3%",
//   },
//   2: {
//     title: "空調",
//     icon: "/ICON/air-conditioner.png",
//     message: "正常運作",
//     state: true,
//     color: "rgb(115, 153, 92)",
//     borderColor: "115, 153, 92",
//     info1: "CH3 正常運作",
//     info2: "CH4 正常運作",
//   },
//   3: {
//     title: "CO2",
//     icon: "/ICON/carbon-dioxide.png",
//     message: "正常運作",
//     state: true,
//     color: "rgb(115, 153, 92)",
//     borderColor: "115, 153, 92",
//     info1: "CH5 350ppm",
//     info2: "CH6 350ppm",
//   },
//   4: {
//     title: "常溫倉",
//     icon: "/ICON/temperature-control.png",
//     message: "異常請注意",
//     state: false,
//     color: "rgb(255, 89, 89)",
//     borderColor: "255, 89, 89",
//     info1: "CH1 50 °C /  70.6%",
//     info2: "CH2 22 °C /  66.3%",
//   },
//   5: {
//     title: "空調",
//     icon: "/ICON/air-conditioner.png",
//     message: "正常運作",
//     state: true,
//     color: "rgb(63, 169, 245)",
//     borderColor: "63, 169, 245",
//     info1: "空調A機 正常運作",
//     info2: "空調B機 正常運作",
//   },
//   6: {
//     title: "CO2",
//     icon: "/ICON/carbon-dioxide.png",
//     message: "異常請注意",
//     state: false,
//     color: "rgb(255, 89, 89)",
//     borderColor: "255, 89, 89",
//     info1: "CH5 1000ppm",
//     info2: "CH6 350ppm",
//   },
//   7: {
//     title: "冷凍倉",
//     icon: "/ICON/temperature-control.png",
//     message: "正常運作",
//     state: true,
//     color: "rgb(115, 153, 92)",
//     borderColor: "115, 153, 92",
//     info1: "CH1 -30.2 °C",
//     info2: "CH2 -31.2 °C",
//   },
// }
