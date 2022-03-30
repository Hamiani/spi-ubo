import { api } from "./fetcher";

import mock from "./mock/student";

const { get, getByPromotion, getOne } = mock;

const studentApi = {
  //get,
  getByPromotion,
  
  //getOne: (id) => getOne(id),


  get: () => api.get("/etudiants"),

  getOne: (id) => api.get(`/etudiants/${id}`),

  //getPays,
  getPays: () => api.get("/pays"),

  //getSexes,
  getSexes: () => api.get("/sexes"),
  
  //getFormation
  getFormations : () => api.get("/formations"),
  
  //update,
  update: ({ id, ...data }) => api.put(`/etudiants/${id}`, { data }),
};

export default studentApi;
