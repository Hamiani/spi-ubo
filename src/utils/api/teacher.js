import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";

const teacherApi = {
  get: () => api.get("/enseignants"),
  getOne: (id) => api.get(`/enseignants/${id}`),
  remove: (data) =>
    api.del("/enseignants", { data, responseType: RESPONSE_TYPE.NONE }),
  create: (data) => api.post("/enseignants", { data }),
};

export default teacherApi;
