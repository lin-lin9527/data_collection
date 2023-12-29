import { createStore } from "vuex"
import setup from "./module/setup";

export default new createStore({
  modules: {
    setup,
  },
});
