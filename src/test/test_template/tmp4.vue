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
            <v-container class="fill-container">
              <v-row class="ml-0 mr-0" style="display:flex;">
                <v-spacer></v-spacer>
                <v-col cols="12" lg="4" md="12" sm="12" class="col1">
                  <CardTemplate class="col1-1" :info="tmpInfo[1]" :isCompose="false"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col2">
                  <CardTemplate class="col2-1" :info="tmpInfo[3]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-2" :info="tmpInfo[4]" :isCompose="true"/>
                  <div style="height: 20px"></div>
                  <CardTemplate class="col2-3" :info="tmpInfo[5]" :isCompose="true"/>
                </v-col>
                <v-col cols="12" lg="4" md="12" sm="12" class="col3">
                  <CardTemplate class="col3-1" :info="tmpInfo[2]" :isCompose="false"/>
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
import CardTemplate from "@/components/cardTemplate.vue"
import template2 from "@/layout/template2.json";

export default {
  components: {
    CardTemplate,
  },
  data() {
    return {
      tmpInfo: {},
    };
  },
  created() {
    this.scanInfo();
  },
  methods: {
    getTmp() {
      this.tmpInfo = template2;
      console.log(this.tmpInfo);
      setTimeout(() => {
        var totalComponent = 0
        var col_list = [".col2-1", ".col2-2", ".col2-3"]
        var col2 = document.querySelector(".col2").clientHeight
        for (let i in col_list) {
          totalComponent += document.querySelector(col_list[i]).clientHeight
        }
        console.log(col2,totalComponent, (col2-totalComponent)/2 )
        
      }, 200);
    },
    scanInfo() {
      this.getTmp();
    },
  },
};
</script>

<!-- 
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
</style> -->
