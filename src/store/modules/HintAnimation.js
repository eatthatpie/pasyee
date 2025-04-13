const state = {
  isHintAnimationEnabled: true,
};

const getters = {
  isHintAnimationEnabled: (state) => {
    return state.isHintAnimationEnabled;
  },
};

const actions = {
  enableHintAnimation({ commit }) {
    commit("setHintAnimationEnabled", true);
  },
  disableHintAnimation({ commit }) {
    commit("setHintAnimationEnabled", false);
  },
};

const mutations = {
  setHintAnimationEnabled(state, isEnabled) {
    state.isHintAnimationEnabled = isEnabled;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
