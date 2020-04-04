import initFileState from "./initFileState";

const mutations = {
  setFileData(state, payload) {
    state.file.data = payload;
  },
  setFileName(state, payload) {
    state.file.name = payload;
  },
  setActiveEnty(state, payload) {
    state.file.active = payload;
  },
  clearAll(state) {
    state.file = Object.assign({}, initFileState);
  }
};

export default mutations;
