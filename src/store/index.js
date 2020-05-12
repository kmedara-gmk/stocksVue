import Vue from 'vue'
import Vuex from 'vuex'
import stocks from '@/store/modules/stocks'
import portfolio from '@/store/modules/portfolio'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    stocks,
    portfolio
  }
})
