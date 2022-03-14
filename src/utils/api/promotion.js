import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";
import mock from "./mock/promotions";

const { get, getOne, changeProcess } = mock;

const candidatApi = {
  //get, //
  get: () => api.get("/promotions"),
  getOne,
  /* getOne: ({ anneeUniversitaire, codeFormation }) =>
    api.get(`/promotions/${codeFormation}/${anneeUniversitaire}`), */
  create: (data) =>
    api.post("/promotions", { data, responseType: RESPONSE_TYPE.NONE }),
  remove: (data) =>
    api.del("/promotions", { data, responseType: RESPONSE_TYPE.NONE }),
  // changeProcess,

  changeProcess: (data) => api.put("/promotions", { data }),
};

export default candidatApi;
