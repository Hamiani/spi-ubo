import { api } from "./fetcher";

import mock from "./mock/student";

const { get, getByPromotion, getOne, create, update, remove } = mock;

const studentApi = {
  get,
  getByPromotion,
  getOne: (id) => getOne(id),
  //create,
  create: (data) => api.post("/etudiants", { data }),
  //update
  update: ({ id, ...data }) => api.put(`/etudiants/${id}`, { data }),
  remove: (id) => api.del(`/etudiants/${id}`)
  //remove
};

export default studentApi;
