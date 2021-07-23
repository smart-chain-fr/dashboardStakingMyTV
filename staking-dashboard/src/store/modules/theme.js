
const state = {
    theme: "dark",
    height: screen.height,
    width: screen.width
}

const getters = {
    theme: state => {
        return state.theme
    },
    height: state => {
        return state.height
    },
    width: state => {
        return state.width
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