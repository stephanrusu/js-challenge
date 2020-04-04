const getters = {
  fileData: state => state.file.data,
  fileName: state => state.file.name,
  paginateFile: state => (pageSize, pageNumber) =>
    state.file.data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
};

export default getters;
