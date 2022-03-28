import { api } from "./fetcher";
import mock from "./mock/promotions";

const { get, getOne, changeProcess, getSalles } = mock;

const candidatApi = {
  //get,
  get: () => api.get("/promotions"),
  //getSalles,
  getSalles: () => api.get("/salles"),
  //getOne,
  getOne: ({ codeFormation, anneeUniversitaire }) =>
    api.get(`/promotions/${codeFormation}/${anneeUniversitaire}`),
  create: (data) => api.post("/promotions", { data }),
  remove: ({ code_Formation, annee_Universitaire }) =>
    api.del(`/promotions/${code_Formation}/${annee_Universitaire}`),
  //changeProcess,

  changeProcess: (data) => api.put("/promotions", { data }),
};

export default candidatApi;
