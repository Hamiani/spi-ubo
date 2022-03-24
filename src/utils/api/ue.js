import { api } from "./fetcher";

import mock from "./mock/ue";

const { get, getOne } = mock;

const ueApi = {
  get,
  getOne: id => getOne(id),
};

export default ueApi;
