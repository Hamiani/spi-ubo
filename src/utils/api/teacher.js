import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";
import mock from "./mock/teacher";

const { get, getOne, create, remove, getTypes, getPays, getSexes, update } =
  mock;

const teacherApi = {
  // get: () => api.get("/enseignants"),
  get,

  getOne,
  // getOne: (id) => api.get(`/enseignants/${id}`),

  //remove,
  remove: (id) => api.del(`/enseignants/${id}`),
  //create,
  create: (data) => api.post("/enseignants", { data }),

  //update,
  update: ({ id, ...data }) => api.put(`/enseignants/${id}`, { data }),

  //getTypes,
  getTypes: () => api.get("/typeenseignant"),

  //getPays,
  getPays: () => api.get("/pays"),

  //getSexes,
  getSexes: () => api.get("/sexes"),

  //update,
  update: ({ id, ...data }) => api.put(`/enseignants/${id}`, { data }),
};

export default teacherApi;
