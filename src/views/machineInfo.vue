<template>
  <v-main class="brown lighten-5" style="background-color: rgb(144, 155, 161)">
    <v-container class="pa-4">
      <v-row class="mt-0">
        <v-col cols="12" lg="3" xl="4" xxl="4" class="delay1">
          <v-card class="card-info" style="min-height: 360px">
            <v-card-title>
              <h3 class="card-title">R1 (TEST)</h3>
            </v-card-title>
            <v-container>
              <div class="linechart"></div>
            </v-container>
            <div style="height: 10px"></div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="5" xl="4" xxl="4" class="delay2">
          <v-card class="card-info" style="min-height: 360px">
            <v-card-title>
              <h3 class="card-title">R2 (TEST)</h3>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="5">
                  <div v-for="(item, index) in R2" :key="index">
                    <h3 :style="[
                      {
                        'color': item.color
                      }
                    ]">{{ item.title }} &nbsp; : {{ item.value }}</h3>
                  </div>
                </v-col>
                <v-spacer></v-spacer>
                <div class="donutchart"></div>
                <v-spacer></v-spacer>
              </v-row>
            </v-container>
            <div style="height: 10px"></div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" xl="4" xxl="4" class="delay3">
          <v-card class="card-info" style="min-height: 360px">
            <v-card-title>
              <h3 class="card-title">R3 (TEST)</h3>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col>
                  <div style="width: 100%" class="barchart"></div>
                </v-col>
              </v-row>
            </v-container>
            <div style="height: 10px"></div>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="delay4">
        <v-col>
          <v-card class="card-info">
            <v-card-title>
              <h3 class="card-title">R4(TEST)</h3>
            </v-card-title>
            <v-card style="background-color: rgb(247, 247, 247)">
              <v-container>
                <div v-for="(item,index) in R4" :key="index">
                  <h3>{{item.title}} &nbsp; : {{item.value}}</h3>
                </div>
              </v-container>
            </v-card>
            <v-container>
              <v-table density="comfortable" height="400px">
                <thead>
                  <tr>
                    <th class="text-center">
                      <h3 class="table-title">審核單號</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">活動/節目名稱</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">審核類型</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">審核狀態</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">審核結果</h3>
                    </th>
                    <th class="text-center">
                      <h3 class="table-title">審核備註</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item,index) in R5" :key="index" 
                    :style="[
                      {
                        'background-color': index %2 == 0 ? 'rgb(230, 230, 230)' : 'white' ,
                      },
                    ]"
                  >
                    <td class="text-center">{{ item.name }}</td>
                    <td class="text-center table-title">{{ item.events }}</td>
                    <td class="text-center">{{ item.types }}</td>
                    <td class="text-center">{{ item.status }}</td>
                    <td class="text-center">{{ item.results }}</td>
                    <td class="text-center">{{ item.remarks }}</td>
                  </tr>
                </tbody>
              </v-table>
              <v-divider></v-divider>
            </v-container>
            <div style="height:10px"></div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import * as donutChart from "../d3/donutChart.js";

import * as barChart from "../d3/barChart.js";

import * as lineChart from "../d3/lineChart.js";


// Vuex
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "getData",
  mutationType: "updateData",
});


export default {
  data() {
    return {
      R1:  [
        {
          year: 2000,
          popularity: 50
        },
        {
          year: 2001,
          popularity: 150
        },
        {
          year: 2002,
          popularity: 200
        },
        {
          year: 2003,
          popularity: 130
        },
        {
          year: 2004,
          popularity: 240
        },
        {
          year: 2005,
          popularity: 380
        },
        {
          year: 2006,
          popularity: 420
        }
      ],
      R2: [
        {
          title: "Soft-serve",
          color: "#5A39AC",
          value: 0,
        },
        {
          title: "Scooped",
          color: "#DD98D6",
          value: 0,
        },
        {
          title: "No Prefer",
          color: "#01B468",
          value: 70,
        },
        {
          title: "Not Sure",
          color: "#08B2B2",
          value: 100,
        },
      ],
      R3: [
        {
          title: "Data 1",
          value: 286,
        },
        {
          title: "Data 2",
          value: 2,
        },
        {
          title: "Data 3",
          value: 333,
        },
        {
          title: "Data 4",
          value: 666,
        },
        {
          title: "Data 5",
          value: 666,
        },
        {
          title: "Data 6",
          value: 666,
        },
      ],
      R4: [
        {
          "title": "工令單號",
          "value": "M110XXXXXXX"
        },
        {
          "title": "客戶",
          "value": "A"
        },
        {
          "title": "規格",
          "value": "R-1232211"
        },
        {
          "title": "交期",
          "value": "2024/01/23"
        },
        {
          "title": "數量",
          "value": "23"
        }
      ],
      R5: [
        {
          name: 'Fern',
          events: 'Low',
          types: '20cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Snake Plant',
          events: 'Low',
          types: '50cm',
          status: 'No',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Monstera',
          events: 'Medium',
          types: '60cm',
          status: 'No',
          results: "Fail",
          remarks: "None",
        },
        {
          name: 'Pothos',
          events: 'Low to medium',
          types: '40cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'ZZ Plant',
          events: 'Low to medium',
          types: '90cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Spider Plant',
          events: 'Bright, indirect',
          types: '30cm',
          status: 'Yes',
          results: "Fail",
          remarks: "None",
        },
        {
          name: 'Air Plant',
          events: 'Bright, indirect',
          types: '15cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Peperomia',
          events: 'Bright, indirect',
          types: '25cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
        {
          name: 'Aloe Vera',
          events: 'Bright, direct',
          types: '30cm',
          status: 'Yes',
          results: "Fail",
          remarks: "None",
        },
        {
          name: 'Jade Plant',
          events: 'Bright, direct',
          types: '40cm',
          status: 'Yes',
          results: "Success",
          remarks: "None",
        },
      ],
    };
  },
  created() {
    clearInterval(this.machineInterval);
  },
  computed: {
    ...mapFields(["machineInterval"]),
  },
  mounted() {
    this.dataInit();
    window.onresize = () => {
      lineChart.editWidth(this.R1, "linechart");
      barChart.editWidth(this.R3, "barchart");
    };
  },
  methods: {
    dataInit() {
      lineChart.init(this.R1, "linechart");
      donutChart.init(this.R2, "donutchart");
      
      barChart.init(this.R3, "barchart");

      clearInterval(this.machineInterval);
      this.machineInterval = setInterval(() => {
        // ========================= R1 Data Update =========================
        var newData = {}
        newData["year"] = this.R1[this.R1.length -1]["year"] + 1
        newData["popularity"] = Math.floor(Math.random() * 700);
        this.R1.shift();
        this.R1.push(newData)
        lineChart.update(this.R1, "update", "linechart");
        // ========================= R2 Data Update =========================
        for (let i in this.R2) {
          this.R2[i].value = Math.floor(Math.random() * 120);
        }
        donutChart.update(this.R2, "donutchart");
        // ========================= R3 Data Update =========================
        for (let i in this.R3) {
          this.R3[i].value = Math.floor(Math.random() * 2700);
        }
        barChart.update(this.R3, "barchart");
      }, 5000);
    },
  },
  onBeforeUnmount() {
    clearInterval(this.machineInterval);
  },
  onUnmounted() {
    clearInterval(this.machineInterval);
  },
};
</script>

<style lang="scss">
.delay1 {
  animation: delay_state 1s;
}
.delay2 {
  animation: delay_state 1.2s;
}
.delay3 {
  animation: delay_state 1.3s;
}
.delay4 {
  animation: delay_state 1s;
}
@keyframes delay_state {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

// .donutchart-tip,.barchart-tip {
//   position: absolute;
//   text-align: left;
//   word-break: break-word;
//   width: 300px;
//   padding: 20px 20px;
//   font: 13px sans-serif;
//   border: 0px;
//   pointer-events: none;
//   border-radius: 8px;
//   backdrop-filter: blur(170px);
//   box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
//   border: 0px rgba(255, 255, 255, 0.4) solid;
//   border-bottom: 0px rgba(40, 40, 40, 0.35) solid;
//   border-right: 0px rgba(40, 40, 40, 0.35) solid;
// }
</style>
