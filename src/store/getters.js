const getters = {
  fileData: state => state.file.data,
  fileName: state => state.file.name,
  fileHeaders: state => Object.keys(state.file.data[0]),
  activeEntryData: state => state.file.active,
  paginateFile: state => (pageSize, pageNumber) =>
    state.file.data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
};

export default getters;
