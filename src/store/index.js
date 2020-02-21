export default {
  strict: process.env.NODE_ENV === 'development',
  state: () => ({
    contactName: null,
    contactMessage: null
  }),
  // getters: {
  //   contactName: state => state.contactName,
  //   contactMessage: state => state.contactMessage
  // },
  mutations: {
    setContactName (state, name) {
      state.contactName = name
    },
    setContactMessage (state, message) {
      state.contactMessage = message
    }
  },
  actions: {
    sendData ({ state, commit }) {
      console.log(state.contactName, state.contactMessage)
      commit('setContactName', null)
      commit('setContactMessage', null)
      // commit('setContactName', name)
      // commit('setContactMessage', message)
    }
  },
  modules: {
  }

}
