import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";

const candidatApi = {
  get: () => api.get("/candidats"),
  getOne: (id) => api.get(`/candidats/${id}`),
  create: (data) => api.post("/candidats", { data }),
  remove: (data) =>
    api.del("/candidats", { data, responseType: RESPONSE_TYPE.NONE }),
};

export default candidatApi;
