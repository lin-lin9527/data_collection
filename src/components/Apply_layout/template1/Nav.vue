<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item
        style="background-color: rgb(100, 178, 241)"
        class="blue darken-4"
      >
        <!-- <v-list-item-content> -->
          <v-list-item-title
            class="white--text font-weight-bold text-center ma-4"
          >
            <h3 style="font-size: x-large">{{ com }}</h3>
          </v-list-item-title>
        <!-- </v-list-item-content> -->
      </v-list-item>
      <v-divider></v-divider>
      <!---------------------------------------------------------------------------------------->
      <v-list class="pa-0">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          color="primary"
          :to="item.path"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout()">
            <h3>Logout</h3>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
// Vuex
import { createHelpers } from "vuex-map-fields";
const { mapFields } = createHelpers({
  getterType: "getData",
  mutationType: "updateData",
});

export default {
  component: {},
  props: {},
  data: () => ({
    com: "百達北倉",
    items: [
      {
        icon: "mdi-database",
        title: "資料資訊",
        active: false,
        path: "/",
      },
      {
        icon: "mdi-database-search-outline",
        title: "資訊統計",
        active: false,
        path: "/infoStatistics",
      },
      {
        icon: "mdi-information-outline",
        title: "設備資訊",
        active: false,
        path: "/machineInfo",
      },
      {
        icon: "mdi-temperature-celsius",
        title: "模板測試1",
        active: false,
        path: "/tmp1",
      },
      {
        icon: "mdi-temperature-celsius",
        title: "模板測試2",
        active: false,
        path: "/tmp2",
      },
      {
        icon: "mdi-temperature-celsius",
        title: "模板測試3",
        active: false,
        path: "/tmp3",
      },
      {
        icon: "mdi-temperature-celsius",
        title: "模板測試4",
        active: false,
        path: "/tmp4",
      },
      {
        icon: "mdi-temperature-celsius",
        title: "模板測試5",
        active: false,
        path: "/tmp5",
      },
    ],
  }),
  computed: {
    ...mapFields(["drawer"]),
  },
  methods: {
    logout() {
      this.drawer = false;
      this.$router.push("/login")
    }
  }
};
</script>
