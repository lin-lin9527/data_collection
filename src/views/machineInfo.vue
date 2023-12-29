<template>
  <v-main class="brown lighten-5" style="background-color: rgb(144, 155, 161)">
    <v-container class="pa-4">
      <v-row class="mt-0">
        <v-col cols="12" lg="4" xl="4" xxl="4" class="delay1">
          <v-card class="card-info" style="min-height: 400px">
            <v-card-title>
              <h3 class="card-title">R1 (TEST)</h3>
            </v-card-title>
            <v-container>
              <v-card style="background-color: rgb(247, 247, 247)">
                <v-container>
                  <h3>資訊1:</h3>
                  <h3>資訊2:</h3>
                  <h3>資訊3:</h3>
                  <h3>資訊4:</h3>
                  <h3>資訊5:</h3>
                </v-container>
              </v-card>
            </v-container>
            <div style="height: 10px"></div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" xl="4" xxl="4" class="delay2">
          <v-card class="card-info" style="min-height: 400px">
            <v-card-title>
              <h3 class="card-title">R2 (TEST)</h3>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="5">
                  <div v-for="(item, index) in donutChartInfo" :key="index">
                    <h3>{{ item.title }}: {{ item.value }}</h3>
                  </div>
                </v-col>
                <v-spacer></v-spacer>
                <div id="donut"></div>
                <v-spacer></v-spacer>
              </v-row>
            </v-container>
            <div style="height: 10px"></div>
          </v-card>
        </v-col>
        <v-col cols="12" lg="4" xl="4" xxl="4" class="delay3">
          <v-card class="card-info" style="min-height: 400px">
            <v-card-title>
              <h3 class="card-title">R3 (TEST)</h3>
            </v-card-title>
            <v-container>
              <v-row>
                <v-col>
                  <div id="my_dataviz"></div>
                </v-col>
              </v-row>
            </v-container>
            <div style="height: 10px"></div>
          </v-card>
        </v-col>
        
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import * as donutChart from "../d3/donutChart.js";

import * as barChart from "../d3/barChart.js";


export default {
  data() {
    return {
      donutChartInfo: [
        {
          title: "Soft-serve",
          value: 286,
          all: 1098,
        },
        {
          title: "Scooped",
          value: 472,
          all: 1098,
        },
        {
          title: "No Prefer",
          value: 318,
          all: 1098,
        },
        {
          title: "Not Sure",
          value: 22,
          all: 1098,
        },
      ],
      barChartInfo: [
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
      ]
    };
  },
  mounted() {
    this.dountChartInit();
    this.barChartInit();
    
  },
  methods: {
    dountChartInit() {
      donutChart.init(this.donutChartInfo);
      setInterval(() => {
        var all = 0;
        for (let i in this.donutChartInfo) {
          this.donutChartInfo[i].value = Math.floor(Math.random() * 120);
          all += this.donutChartInfo[i].value;
        }
        for (let i in this.donutChartInfo) {
          this.donutChartInfo[i].all = all;
        }
        donutChart.update(this.donutChartInfo);
      }, 5000);
    },
    barChartInit() {
      barChart.init(this.barChartInfo);
      setInterval(() => {
        for (let i in this.barChartInfo) {
          this.barChartInfo[i].value = Math.floor(Math.random() * 700);
        }
        barChart.update(this.barChartInfo);
      }, 5000);
    }
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

.donut-tip,.bar-tip {
  position: absolute;
  text-align: left;
  word-break: break-word;
  width: 300px;
  padding: 20px 20px;
  font: 13px sans-serif;
  border: 0px;
  pointer-events: none;
  border-radius: 8px;
  backdrop-filter: blur(170px);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 0px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 0px rgba(40, 40, 40, 0.35) solid;
  border-right: 0px rgba(40, 40, 40, 0.35) solid;
}
</style>
