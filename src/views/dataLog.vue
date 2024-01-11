<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="6" lg="3">
          <DataLogCard :info="item[1]" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>


<script>
import DataLogCard from "@/components/dataLogCard.vue";

export default {
  components: {
    DataLogCard
  },
  data() {
    return {
      item: {
        1: {
          title: "異常警報",
          subtitle1: "3~8度倉",
          subtitle2: "溫度",
          color: "rgb(228, 92, 92)",
          info1: {
            title: "CH1",
            value: 10,
          },
          info2: {
            title: "CH2",
            value: 10,
          },
          info3: {
            title: "CH3",
            value: 10,
          },
          info4: {
            title: "CH4",
            value: 10,
          }
        }
      }
    }
  },
}
</script>