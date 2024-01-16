import api from "../api";
import { createHelpers } from "vuex-map-fields";
const { getData, updateData } = createHelpers({
  getterType: "getData", //get data
  mutationType: "updateData", //set data
});

const state = {
  drawer: false,
  // ================== Data Interval ==================
  machineInterval: null,
  // ================== Data Info ==================
  editState: true,
  info: {
    1: {
      title: "常溫倉",
      icon: "/ICON/temperature-control.png",
      message: "正常運作",
      state: true,
      color: "rgb(115, 153, 92)",
      borderColor: "115, 153, 92",
      info1: "一二三四五六",
      info2: "CH1CH2CH3",
      info3: "六五四三二一",
      info4: "CH4CH5CH6",
    },
    2: {
      title: "空調",
      icon: "/ICON/air-conditioner.png",
      message: "正常運作",
      state: true,
      color: "rgb(115, 153, 92)",
      borderColor: "115, 153, 92",
      info1: "一二三四五六",
      info2: "CH1CH2CH3",
      info3: "一二三四五六",
      info4: "CH1CH2CH3",
    },
    3: {
      title: "CO2",
      icon: "/ICON/carbon-dioxide.png",
      message: "正常運作",
      state: true,
      color: "rgb(115, 153, 92)",
      borderColor: "115, 153, 92",
      info1: "一二三四五六",
      info2: "CH1CH2CH3",
      info3: "一二三四五六",
      info4: "CH1CH2CH3",
    },
    4: {
      title: "常溫倉",
      icon: "/ICON/temperature-control.png",
      message: "異常請注意",
      state: false,
      color: "rgb(255, 89, 89)",
      borderColor: "255, 89, 89",
      info1: "一二三四五六",
      info2: "CH1CH2CH3",
      info3: "一二三四五六",
      info4: "CH1CH2CH3",
    },
    5: {
      title: "空調",
      icon: "/ICON/air-conditioner.png",
      message: "正常運作",
      state: true,
      color: "rgb(63, 169, 245)",
      borderColor: "63, 169, 245",
      info1: "一二三四五六",
      info2: "CH1CH2CH3",
      info3: "一二三四五六",
      info4: "CH1CH2CH3",
    },
    6: {
      title: "CO2",
      icon: "/ICON/carbon-dioxide.png",
      message: "異常請注意",
      state: false,
      color: "rgb(255, 89, 89)",
      borderColor: "255, 89, 89",
      info1: "一二三四五六",
      info2: "CH1CH2CH3",
      info3: "一二三四五六",
      info4: "CH1CH2CH3",
    },
    7: {
      title: "冷凍倉",
      icon: "/ICON/temperature-control.png",
      message: "正常運作",
      state: true,
      color: "rgb(115, 153, 92)",
      borderColor: "115, 153, 92",
      info1: "一二三四五六",
      info2: "CH1CH2CH3",
      info3: "一二三四五六",
      info4: "CH1CH2CH3",
    },
  },
  // ================== State Text Dialog ==================
  alertDialog: false,
  alertIcon: "",
  alertTitle: "",
};
const mutations = {
  updateData,
  alertDialog(state, { icon, title }) {
    state.alertDialog = true;
    state.alertIcon = icon;
    state.alertTitle = title;
  },
};
const actions = {
  // =============================== 冷氣AB機切換時間 api ===============================
  acswitchtimeGet() {
    return api.acswitchtimeGet();
  },
  acswitchtimeSet(state, Query) {
    return api.acswitchtimeSet(Query);
  },
  // =============================== 冷氣switch開關 api ===============================
  acoptGet() {
    return api.acoptGet();
  },
  acoptSet(state, Query) {
    return api.acoptSet(Query);
  },
  // =============================== 冰箱switch開關 api ===============================
  fridgeswGet() {
    return api.fridgeswGet();
  },
  fridgeswSet(state, Query) {
    return api.fridgeswSet(Query);
  },
  // =============================== cfg api ===============================
  cfgGet() {
    return api.cfgGet();
  },
  cfgSet(state, Query) {
    return api.cfgSet(Query);
  },
  currtempGet() {
    return api.currtempGet();
  },
  // =============================== tp100 api ===============================
  tp100Get() {
    return api.tp100Get();
  },
  envtp100Get() {
    return api.envtp100Get();
  },
  envtp100Set(state, Query) {
    return api.envtp100Set(Query);
  },
};
const getters = {
  getData,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
