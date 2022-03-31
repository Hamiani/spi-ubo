import { api } from "./fetcher";

import mock from "./mock/student";

const { get, getByPromotion, getOne, create, update } = mock;

const studentApi = {
  get,
  getByPromotion,
  getOne: (id) => getOne(id),
  create,
  //update
  update: ({ id, ...data }) => api.put(`/etudiants/${id}`, { data })
};

export default studentApi;
