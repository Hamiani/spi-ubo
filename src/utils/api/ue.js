import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";

import mock from "./mock/ue";

const { get, getOne, update, calculateEtd } = mock;

const ueApi = {
  get,
  getOne: (id) => getOne(id),
  /*   update: ({ code_Formation, code_Ue, ...data }) =>
    api.put(`unitesenseignement/${code_Formation}/${code_Ue}`, { data }), */
  update,
  //calculateEtd,
  calculateEtd: (query) =>
    api.get("/unitesenseignement/getEtdPerEnseignantType", {
      query,
      responseType: RESPONSE_TYPE.NONE,
    }),
};

export default ueApi;
