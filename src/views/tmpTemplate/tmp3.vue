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
                <v-col
                  v-for="(item, index) in tmpInfo"
                  :key="index"
                  cols="12"
                  lg="4"
                  md="12"
                  sm="12"
                >
                  <v-card
                    class="card-style"
                    :style="[
                      {
                        'background-color': item.background,
                      },
                    ]"
                  >
                    <v-container>
                      <v-row>
                        <v-spacer></v-spacer>
                        <h1 class="title-text">{{ item.title }}</h1>
                        <v-spacer></v-spacer>
                      </v-row>
                      <v-row>
                        <v-spacer></v-spacer>
                        <v-col cols="6" lg="5">
                          <v-col
                            v-for="(value, id) in item.content"
                            :key="id"
                            cols="12"
                            class="pa-0"
                          >
                            <div v-if="id % 2 == 0">
                              <h1 class="ch-text">{{ value.name }}</h1>
                              <v-card class="ch-card">
                                <h1 class="ch-text">
                                  {{ value.data }} {{ value.unit }}
                                </h1>
                              </v-card>
                              <div style="height: 10px"></div>
                            </div>
                          </v-col>
                        </v-col>
                        <v-col cols="6" lg="5">
                          <v-col
                            v-for="(value, id) in item.content"
                            :key="id"
                            cols="12"
                            class="pa-0"
                          >
                            <div v-if="id % 2 == 1">
                              <h1 class="ch-text">{{ value.name }}</h1>
                              <v-card class="ch-card">
                                <h1 class="ch-text">
                                  {{ value.data }} {{ value.unit }}
                                </h1>
                              </v-card>
                              <div style="height: 10px"></div>
                            </div>
                          </v-col>
                        </v-col>
                        <v-spacer></v-spacer>
                      </v-row>
                      <div style="height: 50px"></div>
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
  </v-main>
</template>

<script>
import template1 from "@/layout/template1.json";

export default {
  data() {
    return {
      tmpInfo: {},
      swInfo: {
        a: null,
        b: null,
      },
      scanTmp2: null,
    };
  },
  created() {
    this.scanInfo();
  },
  methods: {
    tmpExist(id) {
      return this.tmpInfo[id] ? this.tmpInfo[id]["data"] : "--";
    },
    getTmp() {
      this.tmpInfo = template1;
      console.log(this.tmpInfo.length);
    },
    scanInfo() {
      this.getTmp();
      // clearInterval(this.scanTmp2);
      // this.scanTmp2 = setInterval(() => {
      //   this.getTmp();
      // }, 1000);
    },
  },
  onBeforeUnmount() {
    clearInterval(this.scanTmp2);
  },
  onUnmounted() {
    clearInterval(this.scanTmp2);
  },
};
</script>

<style lang="scss" scoped>
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

.card-style {
  border-radius: 20px !important;
  border-style: solid !important;
  border-color: gray white white gray !important;
  border-width: 2px !important;
}
</style>
