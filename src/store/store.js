import { createStore } from "vuex";
import HintAnimationModule from "./modules/HintAnimation";

const store = createStore({
  modules: {
    HintAnimationModule,
  },
});

export default store;
