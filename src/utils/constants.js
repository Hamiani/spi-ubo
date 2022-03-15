export const BASE_URL = "http://localhost:9191/api/v1";
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

export const DEFAULT = "default";

export const PROCESSUS_STAGE = {
  RECH: "RECH",
  EC: "EC",
  TUT: "TUT",
  SOUT: "SOUT",
  EVAL: "EVAL",
};
export const PROCESSUS = {
  RECH: { next: "EC" },
  EC: { next: "TUT" },
  TUT: { next: "SOUT" },
  SOUT: { next: "EVAL" },
  EVAL: { next: "EVAL" },
};

export const TYPES = {
  SUCCESS: "success",
  ERROR: "error",
};

export const DEFAULT_MESSAGES = {
  SUCCESS: "Opération effectuée avec succès",
  ERROR: "Un problème est survenu",
};
