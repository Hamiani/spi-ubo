import { RESPONSE_TYPE } from "../constants";
import { api } from "./fetcher";
import mockApi from "./mock/formation";

const { remove, get } = mockApi;

const formationApi = {
  //get: () => api.get("/formations"),
  get,
  getOne: (id) => api.get(`/formations/${id}`),
  remove: (data) =>
    api.del("/formations", { data, responseType: RESPONSE_TYPE.NONE }),
  create: (data) => api.post("/formations", { data }),
  update: (data) => api.put("/formations", { data }),
};

export default formationApi;
