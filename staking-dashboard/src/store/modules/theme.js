
const state = {
    theme: "dark"
}

const getters = {
    theme: state => {
        return state.theme
    }
}

const mutations = {
    SET_THEME (state, theme) {
        state.theme = theme
    }
}

const actions = {
    setTheme: ({commit}, theme) => {
        commit('SET_THEME', theme);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}