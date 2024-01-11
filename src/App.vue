<template>
  <v-app :style="[
    {
      'background-color': toPath == '/login' ? 'black' : 'rgb(144, 155, 161)',
    }
  ]">
    <router-view name="nav"></router-view>
    <router-view name="headerbar"></router-view>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
    <router-view name="footer"></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      toPath: "/",
      fromPath: "/"
    };
  },
  created() {},
  watch: {
    '$route' (to,from) {
      // console.log(to,from)
      this.toPath = to.path
      this.fromPath = from.path
    }
  }
};
</script>

<style lang="scss" scoped>
// .fade-leave-to {
//   opacity: 0;
// }

.fade-leave-from{
  opacity:1
}
.fade-leave-active{
  transition: opacity 0.2s ease;
}
.fade-leave-to{
  opacity:0
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.2s ease;
}

.fade-enter-to {
  opacity: 1;
}

</style>