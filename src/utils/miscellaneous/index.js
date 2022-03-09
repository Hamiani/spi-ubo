export const checkDataFetcher = (data) =>
  typeof FormData !== "undefined" && data instanceof FormData;
