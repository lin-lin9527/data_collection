<template>
  <v-footer color="#90A4AE" app>
    <span class="text-white">{{ version }}</span>
    <v-spacer></v-spacer>
    <h4
      class="marquee text-truncate text-info text-red boldWord"
      @mouseover="stop"
      @mouseout="lang"
    >
      {{ tversion }}
    </h4>
    <v-spacer></v-spacer>
    <span class="text-white"
      >Copyright &copy; 2020 JQ-Tek. All rights reserved</span
    >
  </v-footer>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    tversion: "",
    version: "Ver:1.0",
  }),
  mounted() {
    // this.lang(); //啟動非法版權宣告
  },
  methods: {
    //跑馬燈開始
    lang() {
      this.tversion =
        "軟體尚未授權.金慶科技所有拷貝必究.軟體尚未授權.金慶科技所有拷貝必究.";
      if (this.intervalId != null) return;
      this.intervalId = setInterval(() => {
        //得到第一個字元
        var start = this.tversion.substring(0, 1);
        //得到最後一個字元
        var end = this.tversion.substring(1);
        //後面與前面字元連接
        this.tversion = end + start;
      }, 300);
    },
    //停止計時器
    stop() {
      clearInterval(this.intervalId);
      //當清除定時器之後，重新讓intervalId為null
      this.intervalId = null;
    },
  },
};
</script>

<style scoped>
.redWord {
  color: red;
}
.boldWord {
  font-weight: bold;
}
</style>
