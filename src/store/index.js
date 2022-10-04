import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    totalItems: [],
  },
  getters: {
    gettotalItems(state) {
      return state.totalItems;
    }
  },
  mutations: {
    setTotalItems(state, payload) {
      state.totalItems = payload;
    }
  },
  actions: {
  }
})
