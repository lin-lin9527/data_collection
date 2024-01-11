<template>
  <nav>
    <v-app-bar
      app
      flat
      min-height="70"
      style="background-color: rgb(195, 201, 204)"
    >
      <v-app-bar-nav-icon @click="changeDrawer" class="indigo--text" />
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-bold">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip text="Warn Info" location="left">
        <template v-slot:activator="{ props }">
          <v-icon v-if="warningState" v-bind="props" class="warning mr-3" size="x-large" @click="showWarning()">mdi-alert</v-icon>
        </template>
      </v-tooltip>
      
      <v-icon class="blank mr-3" size="x-large">mdi-blank</v-icon>
      <v-icon class="blank mr-3" size="x-large">mdi-blank</v-icon>
      <v-icon class="blank mr-3" size="x-large">mdi-blank</v-icon>
      <v-divider vertical></v-divider>
      <h3 class="ml-4 mr-4" style="text-align: center" v-html="dateNow"></h3>
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
    this.localDate();
    // this.formatDate();
    clearInterval(this.localTimeInterval);
    this.localTimeInterval = setInterval(() => {
      this.scanWarning();
      this.localDate();
      // this.formatDate();
    }, 1000);
    
  },
  computed: {
    ...mapFields(["drawer","info"]),
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
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
    formatDate() {
      let date = new Date();
      this.dateNow = newDate(date);
      function newDate(date) {
        return (
          [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
          ].join("/") +
          " <br> " +
          [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
            padTo2Digits(date.getSeconds()),
          ].join(":")
        );
      }
      function padTo2Digits(num) {
        return num.toString().padStart(2, "0");
      }
    },
    showWarning() {
      this.warningDialog = true;
    }
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
