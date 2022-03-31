import { api } from "./fetcher";

import mock from "./mock/ue";

const { get, getOne, update, calculateEtd } = mock;

const ueApi = {
  get,
  //getOne,
  getOne: ({ code_Formation, code_Ue }) =>
    api.get(`/unitesenseignement/${code_Formation}/${code_Ue}`),

  //update,
  update: ({ code_Formation, code_Ue, ...data }) =>
    api.put(`unitesenseignement/${code_Formation}/${code_Ue}`, { data }),

  //calculateEtd,
  calculateEtd: (query) =>
    api.get("/unitesenseignement/getEtdPerEnseignantType", {
      query,
    }),
};

export default ueApi;
