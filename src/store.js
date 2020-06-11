import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarios: []
    },
    actions: {
        getUsuarios({ commit }, usuarios) {
            commit('getUsuarios', usuarios)
        }
    },
    mutations: {
        getUsuarios(state, usuarios) {
            state.usuarios = usuarios
        }
    }
})
