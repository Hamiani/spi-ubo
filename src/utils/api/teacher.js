import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";
import mock from "./mock/teacher";

const { get, getOne, create, remove, getTypes, getPays, getSexes } = mock;

const teacherApi = {
  // get: () => api.get("/enseignants"),
  get,
  //getOne,
  getOne: (id) => api.get(`/enseignants/${id}`),
  remove: (id) =>
    api.del(`/enseignants/${id}`, { responseType: RESPONSE_TYPE.NONE }),
  //remove,
  create,
  // create: (data) => api.post("/enseignants", { data }),
  //create,
  // create: (data) => api.post("/enseignants", { data }),
  // getTypes: () => api.get("/typeenseignant"),
  // getPays: () => api.get("/pays"),
  // getSexes: () => api.get("/sexes"),
  getTypes,
  getSexes,
  getPays
};

export default teacherApi;
