<template>
  <v-main class="brown lighten-5">
    <v-container class="pa-7">
      <v-row>
        <v-col cols="12">
          <v-card
            style="
              min-height: 550px;
              background-color: black;
              border-radius: 10px;
            "
          >
            <v-container></v-container>
            <v-container>
              <v-row>
                <v-spacer></v-spacer>
                <v-col cols="12" lg="3" md="12" sm="12">
                  <v-card class="ac-status-card">
                    <v-container>
                      <v-row>
                        <v-spacer></v-spacer>
                        <h1>市電狀態</h1>
                        <v-spacer></v-spacer>
                      </v-row>
                      <div style="height: 70px"></div>
                      <v-row style="margin:0px auto">
                        <v-col cols="2" />
                        <v-col cols="8">
                          <v-card
                            style="
                              background-color: rgb(172, 168, 168);
                              border-radius: 10px;
                            "
                          >
                            <h1 style="text-align: center; color: white;">
                              無狀態
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="2" />
                      </v-row>
                      <div style="height: 70px"></div>
                    </v-container>
                  </v-card>
                  <div style="height: 20px"></div>
                  <v-card class="ac-status-card">
                    <v-container>
                      <v-row>
                        <v-spacer></v-spacer>
                        <h1>冷氣狀態</h1>
                        <v-spacer></v-spacer>
                      </v-row>
                      <v-row>
                        <v-col cols="2" />
                        <v-col cols="8">
                          <h1 style="text-align: center">A機</h1>
                          <v-card
                            :style="[
                                {
                                  'background-color': swInfo.b != null ? swInfo.b ? '#228B22' : '#990000' : 'grey',
                                  'border-radius': '10px'
                                },
                              ]"
                            >
                            <h1 style="text-align: center; color: white">
                              {{ swInfo.b != null ? swInfo.b ? '運行中' : '已停止' : '無資料'}}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="2" />
                      </v-row>
                      <div style="height: 20px"></div>
                      <v-row>
                        <v-col cols="2" />
                        <v-col cols="8">
                          <h1 style="text-align: center">B機</h1>
                          <v-card
                            :style="[
                              {
                                'background-color': swInfo.b != null ? swInfo.b ? '#228B22' : '#990000' : 'grey',
                                'border-radius': '10px'
                              },
                            ]"
                          >
                            <h1 style="text-align: center; color: white">
                              {{ swInfo.b != null ? swInfo.b ? '運行中' : '已停止' : '無資料'}}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="2" />
                      </v-row>
                      <div style="height: 27px"></div>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12">
                  <v-card class="normal-tmp-card">
                    <v-container>
                      <v-row>
                        <v-spacer></v-spacer>
                        <h1 class="title-text">常溫</h1>
                        <v-spacer></v-spacer>
                      </v-row>
                      <v-row>
                        <v-col cols="0" lg="1" />
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH1</h1>
                          <!-- <v-card class="ch-card-warn"> -->
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH1") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH2</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH2") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="0" lg="1" />
                      </v-row>
                      <div style="height: 20px"></div>
                    </v-container>
                  </v-card>
                  <div style="height: 20px"></div>
                  <v-card class="normal-refrigerator-card">
                    <v-container>
                      <v-row>
                        <v-spacer></v-spacer>
                        <h1 class="title-text">常溫冰箱</h1>
                        <v-spacer></v-spacer>
                      </v-row>
                      <v-row>
                        <v-col cols="0" lg="1" />
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH3</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH3") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH4</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH4") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="0" lg="1" />
                      </v-row>
                      <div style="height: 20px"></div>
                    </v-container>
                  </v-card>
                  <div style="height: 20px"></div>
                  <v-card class="refrigeration-card">
                    <v-container>
                      <v-row>
                        <v-spacer></v-spacer>
                        <h1 class="title-text">2~8冷藏</h1>
                        <v-spacer></v-spacer>
                      </v-row>
                      <v-row>
                        <v-col cols="0" lg="1" />
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH5</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH5") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH6</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH6") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="0" lg="1" />
                      </v-row>
                      <div style="height: 20px"></div>
                    </v-container>
                  </v-card>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12">
                  <v-card class="freez-card">
                    <v-container>
                      <v-row>
                        <v-spacer></v-spacer>
                        <h1 class="title-text">冷凍</h1>
                        <v-spacer></v-spacer>
                      </v-row>
                      <v-row>
                        <v-col cols="0" lg="1" />
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH7</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH7") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH8</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH8") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="0" lg="1" />
                      </v-row>
                      <div style="height: 116px"></div>
                      <v-row>
                        <v-col cols="0" lg="1" />
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH9</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH9") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH10</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH10") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="0" lg="1" />
                      </v-row>
                      <div style="height: 116px"></div>
                      <v-row>
                        <v-col cols="0" lg="1" />
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH11</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH11") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="6" lg="5">
                          <h1 class="ch-text">CH12</h1>
                          <v-card class="ch-card">
                            <h1 class="ch-text">
                              {{ tmpExist("CH12") }}
                            </h1>
                          </v-card>
                        </v-col>
                        <v-col cols="0" lg="1" />
                      </v-row>
                      <div style="height: 20px"></div>
                    </v-container>
                  </v-card>
                </v-col>
                <v-spacer></v-spacer>
              </v-row>
            </v-container>
            <v-container></v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <showAlertDialog />
  </v-main>
</template>

<script>
import showAlertDialog from "@/components/showAlertDialog.vue";
export default {
  components: {
    showAlertDialog
  },
  data() {
    return {
      tmpInfo: {},
      swInfo: {
        a: null,
        b: null,
      },
      scanTempApi: null,
    };
  },
  created() {
    this.scanInfo();
  },
  methods: {
    tmpExist(id) {
      return this.tmpInfo[id] ? this.tmpInfo[id]["data"] : '--';
    },
    getTmp() {
      var api_list = [
        this.$store.dispatch("tp100Get"), // 溫度狀態
        this.$store.dispatch("acoptGet")  // 冷氣switch狀態
      ];
      Promise.all(api_list).then((res) => {
        var chs = res[0]["data"]["CHS"];
        this.tmpInfo = {};
        for (let i in chs) {
          var info = {};
          var id = i.split("CH")[1];
          info["id"] = parseInt(id);
          info["name"] = `溫度${id}`;
          info["data"] = chs[i] == 8000? "-" : `${String((parseFloat(chs[i]) / 10).toFixed(1))}°C`;
          this.tmpInfo[i] = info;
        }
        var swInfo = res[1]["data"]
        this.swInfo = swInfo
      });
    },
    scanInfo() {
      this.getTmp();
      clearInterval(this.scanTempApi);
      this.scanTempApi = setInterval(() => {
        this.getTmp();
      }, 1000);
    },
  },
  beforeDestroy() {
    clearInterval(this.scanTempApi);
  },
  destroyed() {
    clearInterval(this.scanTempApi);
  },
};
</script>

<style lang="scss" scoped>
// .v-input--selection-controls {
//   margin-top: 0px;
//   padding-top: 0px;
// }
.title-text {
  text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  color: white;
}
.ch-text {
  text-shadow: 1px 1px 0px rgba(255, 255, 255, 1);
  text-align: center;
}
.ch-card {
  border-radius: 10px;
}

.ch-card-warn {
  border-radius: 10px;
  animation-name: warnFlashColor;
	animation-duration: 1s;
	animation-iteration-count: infinite;
  // animation-direction: alternate;
}

@keyframes warnFlashColor {
  // 0% {
	// 	background: #990000;
	// }
  // 25% {
	// 	background: #cc0000;
	// }
  // 50% {
	// 	background: #ff0000;
	// }
  // 75% {
	// 	background: #cc0000;
	// }
	// 100% {
	// 	background: #990000;
	// }
  0% {
		background: #990000;
	}
  50% {
		background: #ff0000;
	}
	100% {
		background: #990000;
	}
}


.normal-tmp-card {
  background-color: #90c090 !important;
  border-radius: 20px !important;
  border-style: solid !important;
  border-color: gray white white gray !important;
  border-width: 2px !important;
}

.normal-refrigerator-card {
  background-color: #60c0bf !important;
  border-radius: 20px !important;
  border-style: solid !important;
  border-color: gray white white gray !important;
  border-width: 2px !important;
}

.refrigeration-card {
  background-color: #c09090 !important;
  border-radius: 20px !important;
  border-style: solid !important;
  border-color: gray white white gray !important;
  border-width: 2px !important;
}

.freez-card {
  background-color: #70abd3 !important;
  border-radius: 20px !important;
  border-style: solid !important;
  border-color: gray white white gray !important;
  border-width: 2px !important;
}

.ac-status-card {
  background-color: white !important;
  border-radius: 20px !important;
  border-style: solid !important;
  border-color: gray white white gray !important;
  border-width: 6px !important;
}
</style>
