import { api } from "./fetcher";

import mock from "./mock/student";

const { get, getByPromotion, getOne } = mock;

const studentApi = {
  get,
  getByPromotion,
  getOne: (id) => getOne(id),
};

export default studentApi;
