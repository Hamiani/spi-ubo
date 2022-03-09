import qs from "qs";
import isNil from "lodash/isNil";

import { checkDataFetcher } from "../miscellaneous";
import { BASE_URL, RESPONSE_TYPE } from "../constants";

const baseUrl = BASE_URL;
const json = RESPONSE_TYPE.JSON;
const none = RESPONSE_TYPE.NONE;

const formatRequest = {
  true: ({ data }) => {
    const body = data;
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return [body, headers];
  },
  false: ({ data }) => {
    const body = JSON.stringify(data);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return [body, headers];
  },
};

const parsePublicHeader = ({ publicHeader, token, isPublic }) =>
  isPublic
    ? publicHeader
    : { ...publicHeader, Authorization: `Bearer ${token}` };

const parseResponse = {
  json: (response) => response.json(),
  none: (response) => response,
};

const request = async (
  endpoint,
  {
    data,
    query,
    headers = {},
    method = "GET",
    responseType = json,
    isPublic = false,
  },
  apiUrl
) => {
  try {
    let url;
    const token = await localStorage.getItem("access_token");

    // Format Data && Headers
    const isForm = checkDataFetcher(data);
    const [body, publicHeader] = formatRequest[isForm]({ data, token });
    const header = parsePublicHeader({ publicHeader, token, isPublic });

    // Fomat Query
    const queryString = query ? `?${qs.stringify({ ...qs.parse(query) })}` : "";

    // Format Url
    if (isNil(apiUrl)) url = baseUrl + endpoint + queryString;
    else url = apiUrl + endpoint + queryString;

    // Send Request
    const result = await fetch(url, {
      body,
      method,
      headers: { ...header, ...headers },
    });
    // Format Response
    const type = { json }[responseType] || none;
    const res = await parseResponse[type](result);

    if (!result.ok) return Promise.reject({ ...res, status: result.status });

    return res;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const api = {
  get: (endpoint, opts, apiUrl) =>
    request(endpoint, { ...opts, method: "GET" }, apiUrl),
  post: (endpoint, opts, apiUrl) =>
    request(endpoint, { ...opts, method: "POST" }, apiUrl),
  put: (endpoint, opts) => request(endpoint, { ...opts, method: "PUT" }),
  patch: (endpoint, opts) => request(endpoint, { ...opts, method: "PATCH" }),
  del: (endpoint, opts) => request(endpoint, { ...opts, method: "DELETE" }),
};
