import Papa from "papaparse";

const actions = {
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
    commit("setFileName", payload);
  }
};

export default actions;
