import { createStore } from 'vuex'

export default createStore({
  state: {
    userInfo: {}
  },
  getters: {
  },
  mutations: {
    changeLogin(state, status) {
      state.userInfo = status;
    }
  },
  actions: {
    loginAction({ commit }, user) {
      commit('changeLogin', user);
    }
  },
  modules: {
  }
})
