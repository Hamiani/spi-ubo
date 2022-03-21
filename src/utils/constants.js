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

export const DATE_FORMAT = "DD-MM-YY";
export const DATE_MESSAGES = {
  dateReponseLalp:
    "La date de réponse liste d'attente doit être supérieur à la date réponse liste principale et inférieur à la date de rentrée",
  dateReponseLp:
    "La date de réponse liste principale doit être inférieur à la date réponse liste d'attente et inférieur à la date de rentrée",
  dateRentree:
    "La date de rentrée doit être supérieur à la date liste principale et la date réponse liste d'attente",
};

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
  ERROR: "Un problème est survenu : ",
};

export const UBO_LINKS = {
 FACEBOOK : 'https://www.facebook.com/UBO.UnivBrest',
 LINKEDIN : 'https://www.linkedin.com/school/ubo/?originalSubdomain=fr',
 MAIL:'mailto:directeur.sciences@univ-brest.fr',
 YOUTUBE:'https://www.youtube.com/user/UnivBrest',
 TWITER:'https://twitter.com/UBO_UnivBrest'
}