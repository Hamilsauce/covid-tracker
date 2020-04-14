import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gridColumns: ["date", "confirmed", "deaths", "recovered"],
    queryResults: []
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
