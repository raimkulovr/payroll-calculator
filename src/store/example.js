export default{
    state: {
        message: 'hello vuex',
    },
    mutations: {
        setMessage (state, message) {
            state.message = message
        }
    },
    actions: {
        setMessage({commit}, payload) {
            commit('setMessage', payload)
        }
    },
    getters: {
        getMessage(state){
            return state.message

        }
    },
}