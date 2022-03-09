import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";

const candidatApi = {
  get: () => api.get("/promotions"),
  getOne: ({ anneeUniversitaire, codeFormation }) =>
    api.get(`/promotions/${codeFormation}/${anneeUniversitaire}`),
  create: (data) =>
    api.post("/promotions", { data, responseType: RESPONSE_TYPE.NONE }),
  remove: (data) =>
    api.del("/promotions", { data, responseType: RESPONSE_TYPE.NONE }),
};

export default candidatApi;
