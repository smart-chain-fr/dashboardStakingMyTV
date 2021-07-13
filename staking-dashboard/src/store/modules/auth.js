
const state = {
    isConnected: true,
    address: "0x123455555567890"
}

const getters = {
    isConnected: state => {
        return state.isConnected
    },
    address: state => {
        return state.address
    }
}

const mutations = {
    SET_CONNECTED (state, isConnected) {
        state.isConnected = isConnected
    },
    SET_ADDRESS(state, address){
        state.address = address
    }
}

const actions = {
    setConnected: ({commit}, isConnected) => {
        commit('SET_CONNECTED', isConnected);
    },
    setAddress:({commit}, address) => {
        commit('SET_ADDRESS', address)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}