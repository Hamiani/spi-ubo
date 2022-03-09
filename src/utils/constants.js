export const BASE_URL =
  "https://app-9f355f19-90a4-4e35-ade0-3982076a7ad4.cleverapps.io";
export const PATHS = {
  /*  FORMATIONS: {
    HOME: "/",
    LIST: "/formations",
    DETAIL: "/formations/:id",
    CREATE: "/formations/create",
    UPDATE: "/formations/update/:id",
    UPDATEE: "/formations/update",
  }, */
  TEACHERS: {
    LIST: "/enseignants",
    CREATE: "/enseignants/create",
    DETAIL: "/enseignants/:id",
  },
  PROMOTIONS: {
    LIST: "/promotions",
    CREATE: "/promotions/create",
    DETAIL: "/promotions/:codeFormation/:anneeUniversitaire",
  },

  HOME: "/",
/*   REGISTRATION: "/register",
  LOGIN: "/login",
  LOGOUT: "/logout", */
};

export const RESPONSE_TYPE = {
  JSON: "json",
  NONE: "none",
};

export const ROUTES_ACCESS = {
  PUBLIC: "public",
  PRIVATE: "private",
};

export const DATE_FORMAT = "YYYY-MM-DD";

export const ALL = "all";
