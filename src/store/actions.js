import Papa from "papaparse";

const actions = {
  // parse csv file obtained from file upload
  processFile({ commit }, payload) {
    Papa.parse(payload, {
      header: true,
      complete(results) {
        let file = results.data;
        commit("setFileData", file);
      },
      error(errors) {
        if (!errors.length) {
          errors.forEach(error => {
            new Error(error);
          });
        }
      }
    });
  },

  updateFileName({ commit }, payload) {
    commit("updateFileName", payload);
  },

  clearFile({ commit }) {
    commit("clearFile");
  },

  setActiveEntry({ commit, state }, payload) {
    let indexEntry = state.file.data.indexOf(payload);
    commit("setActiveEntry", payload);
    commit("setActiveIndex", indexEntry);
  },

  clearActiveEntry({ commit }) {
    commit("setActiveEntry", {});
    commit("setActiveIndex", -1);
  },

  updateEntryData({ commit, state }, payload) {
    let newData = [...state.file.data];

    newData[state.file.activeIndex] = Object.assign({}, payload);
    commit("setFileData", newData);
  }
};

export default actions;
