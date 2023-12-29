<template>
  <v-card
    class="card-style"
    :style="[
      {
        'background-color': info.background,
      },
    ]"
  >
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <h1 class="title-text">{{ info.title }}</h1>
        <v-spacer></v-spacer>
      </v-row>
      <!-- <v-row>
        <v-spacer></v-spacer>
          <v-col
            v-for="(value, id) in info.content"
            :key="id"
            cols="6"
            class="pa-0"
          >
            <div class="mr-0 ml-0">
              <h1 class="ch-text">{{ value.name }}</h1>
              <v-card class="ch-card">
                <h1 class="ch-text">{{ value.data }} {{ value.unit }}</h1>
              </v-card>
              <div v-if="isCompose" style="height: 10px"></div>
              <div v-else style="height: 80px"></div>
            </div>
          </v-col>
        <v-spacer></v-spacer>
      </v-row> -->


      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="6" lg="5">
          <v-col
            v-for="(value, id) in info.content"
            :key="id"
            class="pa-0"
          >
            <div v-if="id % 2 == 0">
              <h1 class="ch-text">{{ value.name }}</h1>
              <v-card class="ch-card">
                <h1 class="ch-text">{{ value.data }} {{ value.unit }}</h1>
              </v-card>
              <div v-if="isCompose" style="height: 10px"></div>
              <div v-else style="height: 80px"></div>
            </div>
          </v-col>
        </v-col>
        <v-col cols="6" lg="5">
          <v-col
            v-for="(value, id) in info.content"
            :key="id"
            class="pa-0"
          >
            <div v-if="id % 2 == 1">
              <h1 class="ch-text">{{ value.name }}</h1>
              <v-card class="ch-card">
                <h1 class="ch-text">{{ value.data }} {{ value.unit }}</h1>
              </v-card>
              <div v-if="isCompose" style="height: 10px"></div>
              <div v-else style="height: 80px"></div>
            </div>
          </v-col>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      <div style="height: 10px"></div>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["info","isCompose"],
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
