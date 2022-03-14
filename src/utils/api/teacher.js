import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";
import mock from "./mock/teacher";

const { get, getOne, create, remove } = mock;

const teacherApi = {
  get: () => api.get("/enseignants"),
  //get,
  //getOne,
  getOne: (id) => api.get(`/enseignants/${id}`),
  //remove : (id) => api.del(`/enseignants/${id}`),
  remove,
  create,
  // create: (data) => api.post("/enseignants", { data }),
};

export default teacherApi;
