import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";
import mock from "./mock/teachers";

const { get } = mock;

const teacherApi = {
  //get: () => api.get("/enseignants"),
  get,
  getOne: (id) => api.get(`/enseignants/${id}`),
  remove: (data) =>
    api.del("/enseignants", { data, responseType: RESPONSE_TYPE.NONE }),
  create: (data) => api.post("/enseignants", { data }),
};

export default teacherApi;
