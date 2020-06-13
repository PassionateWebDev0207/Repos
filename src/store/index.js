import Vue from 'vue'
import Vuex from 'vuex'
import git from './modules/git'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    git: {
      namespaced: true,
      state: git.state,
      getters: git.getters,
      actions: git.actions,
      mutations: git.mutations
    }
  }
})