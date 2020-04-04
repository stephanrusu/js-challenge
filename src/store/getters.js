import { orderBy } from "lodash";
const getters = {
  fileData: state => state.file,
  paginateFile: state => (pageSize, pageNumber) =>
    orderBy(state.file, "id", "desc").slice(
      (pageNumber - 1) * pageSize,
      pageNumber * pageSize
    )
};

export default getters;
