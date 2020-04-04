import initFileState from "./initFileState";

const mutations = {
  setFileData(state, payload) {
    state.file.data = payload;
  },
  updateFileName(state, payload) {
    state.file.name = payload;
  },
  setActiveEntry(state, payload) {
    state.file.active = Object.assign({}, payload);
  },
  setActiveIndex(state, payload) {
    state.file.activeIndex = payload;
  },
  clearFile(state) {
    state.file = Object.assign({}, initFileState);
  }
};

export default mutations;
