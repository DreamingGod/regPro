const state = {
  totalList: []
}

const mutations = {
  DISPLAY_UPDATE_TOTAL_LIST (state, list) {
    state.totalList = list
  }
}

export default {
  state,
  mutations
}
