<template>
  <nav>
    <v-app-bar
      app
      flat
      min-height="70"
      style="background-color: rgb(195, 201, 204)"
    >
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-bold">倉間環控系統</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip v-if="warningState" text="Warn Info" location="left">
        <template v-slot:activator="{ props }">
          <v-icon v-bind="props" class="warning mr-3" size="x-large" @click="showWarning()">mdi-alert</v-icon>
        </template>
      </v-tooltip>
      <v-select
        v-model="pathInfo"
        class="pt-5 mr-3"
        style="max-width: 200px"
        variant="outlined"
        density="compact"
        item-title="title"
        item-value="path"
        :items="route_path">
      </v-select>
      <v-divider vertical></v-divider>
      <h3 class="ml-4 mr-4" style="text-align: center; min-width: 110px;" v-html="dateNow"></h3>
    </v-app-bar>
    <v-dialog v-model="warningDialog" width="60%">
      <v-card :class="warningDialog ? 'delay' : 'out'">
        <v-card-title>
          <h3>Warn List</h3>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="items"
          items-per-page="5"
        ></v-data-table>
      </v-card>
    </v-dialog>
    <showAlertDialog />
  </nav>
</template>

<script>
import showAlertDialog from "@/components/showAlertDialog.vue";
// Vuex
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "getData",
  mutationType: "updateData",
});

export default {
  props: ["title"],
  components: {
    showAlertDialog
  },
  data() {
    return {
      localTimeInterval: null,
      dateNow: null,
      warningState: false,
      warningDialog: false,
      pathInfo: "/",
      route_path: [
        { title: '溫溼度', path: '/' },
        { title: '用電資訊', path: '/infoStatistics' },
        { title: '空氣品質', path: '/dataLog' },
        { title: '紀錄表', path: '/machineInfo' },
      ],
      headers: [
        { title: 'Title', value: 'title' },
        { title: 'State', value: 'state' },
        { title: 'Info 1', value: 'info1' },
        { title: 'Info 2', value: 'info2' },
      ],
      items: [],
    };
  },
  created() {
    this.pathInfo = this.$route.path
    this.initDate();
    
  },
  watch: {
    pathInfo(router) {
      this.$router.push(router)
    }
  },
  computed: {
    ...mapFields(["drawer","info"]),
  },
  methods: {
    initDate() {
      this.localDate();
      clearInterval(this.localTimeInterval);
      this.localTimeInterval = setInterval(() => {
        this.scanWarning();
        this.localDate();
      }, 1000);
    },
    scanWarning() {
      var save_list = []
      for (let i in this.info) {
        if (!this.info[i]["state"]) {
          var Data = {
            title: this.info[i]["message"],
            state: this.info[i]["state"],
            info1: this.info[i]["info1"],
            info2: this.info[i]["info2"]
          }
          save_list.push(Data);
        }
      }
      this.items = save_list
      this.warningState = this.items.length != 0 ? true : false;
    },
    localDate() {
      const date = new Date()
      var dateInfo = date.toLocaleString().split(" ")
      this.dateNow = dateInfo[0] + " <br> " + dateInfo[1]
    },
    showWarning() {
      this.warningDialog = true;
    },
  },
  beforeUnmount() {
    clearInterval(this.localTimeInterval);
  },
};
</script>

<style lang="scss" scoped>
.blank {
  width: 50px;
  height: 50px;
}
.warning {
  cursor: pointer;
  width: 50px;
  height: 50px;
  color: red;
  animation: blink 0.7s infinite;
}

@keyframes blink {
  to {
    color: transparent;
  }
}

.delay {
  animation: delay_state 0.7s;
}
@keyframes delay_state {
  0% { 
    opacity: 0;
    transform: translateY(-150px);
  }
  100% { 
    opacity: 1; 
    transform: translateY(0px);
  }
}
.out {
  animation: out_state 0.7s;
}
@keyframes out_state {
  0% { 
    opacity: 1;
    transform: translateY(0px);
  }
  100% { 
    opacity: 0; 
    transform: translateY(150px);
  }
}
</style>
