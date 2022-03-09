import { api } from "./fetcher";
import mock from "./mock/auth";

const { register } = mock;

const authApi = {
  register: (data) => api.post("/api/auth/signup", { data }),
  login: (data) => api.post("/api/auth/signin", { data }),
};

export default authApi;
