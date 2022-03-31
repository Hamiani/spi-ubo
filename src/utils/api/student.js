import { api } from "./fetcher";

import mock from "./mock/student";

const { get, getByPromotion, getOne, create } = mock;

const studentApi = {
  get,
  getByPromotion,
  getOne: (id) => getOne(id),
  create,
};

export default studentApi;
