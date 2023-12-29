// Composables
import { createRouter, createWebHistory } from 'vue-router'


// Apply Layout
import Nav from "@/components/Apply_layout/Nav.vue";
import Headerbar from "@/components/Apply_layout/Headerbar.vue";
import Footer from "@/components/Apply_layout/Footer.vue";


import tmp1 from '@/views/tmpTemplate/tmp1.vue'
import tmp2 from '@/views/tmpTemplate/tmp2.vue'
import tmp3 from '@/views/tmpTemplate/tmp3.vue'
import tmp4 from '@/views/tmpTemplate/tmp4.vue'
import tmp5 from '@/views/tmpTemplate/tmp5.vue'

// ============================================
// import login from "@/views/login.vue"
import login from "@/views/login_template/login1.vue"

import dataInfo from '@/views/dataInfo.vue'
import infoStatistics from '@/views/infoStatistics.vue'
import machineInfo from '@/views/machineInfo.vue'


const routes = [
  {
    path: '/login',
    name: 'Login Page',
    components: {
      default: login,
    },
  },
  {
    path: '/',
    name: 'Data Info',
    components: {
      default: dataInfo,
      nav: Nav,
      headerbar: Headerbar,
      footer: Footer,
    },
    props: {
      headerbar: {
        title: "資料資訊",
      },
    },
  },
  {
    path: '/infoStatistics',
    name: 'Info Statistics',
    components: {
      default: infoStatistics,
      nav: Nav,
      headerbar: Headerbar,
      footer: Footer,
    },
    props: {
      headerbar: {
        title: "資訊統計",
      },
    },
  },
  {
    path: '/machineInfo',
    name: 'Machine Info',
    components: {
      default: machineInfo,
      nav: Nav,
      headerbar: Headerbar,
      footer: Footer,
    },
    props: {
      headerbar: {
        title: "設備資訊",
      },
    },
  },
  {
    path: '/tmp1',
    name: 'Instant Temperature1',
    components: {
      default: tmp1,
      nav: Nav,
      headerbar: Headerbar,
      footer: Footer,
    },
    props: {
      headerbar: {
        title: "模板測試1",
      },
    },
  },
  {
    path: '/tmp2',
    name: 'Instant Temperature2',
    components: {
      default: tmp2,
      nav: Nav,
      headerbar: Headerbar,
      footer: Footer,
    },
    props: {
      headerbar: {
        title: "模板測試2",
      },
    },
  },
  {
    path: '/tmp3',
    name: 'Instant Temperature3',
    components: {
      default: tmp3,
      nav: Nav,
      headerbar: Headerbar,
      footer: Footer,
    },
    props: {
      headerbar: {
        title: "模板測試3",
      },
    },
  },
  {
    path: '/tmp4',
    name: 'Instant Temperature4',
    components: {
      default: tmp4,
      nav: Nav,
      headerbar: Headerbar,
      footer: Footer,
    },
    props: {
      headerbar: {
        title: "模板測試4",
      },
    },
  },
  {
    path: '/tmp5',
    name: 'Instant Temperature5',
    components: {
      default: tmp5,
      nav: Nav,
      headerbar: Headerbar,
      footer: Footer,
    },
    props: {
      headerbar: {
        title: "模板測試5",
      },
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
