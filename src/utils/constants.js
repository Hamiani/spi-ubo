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
    UPDATE: "/enseignants/update/:id",
  },
  PROMOTIONS: {
    LIST: "/promotions",
    CREATE: "/promotions/create",
    DETAIL: "/promotions/:code_Formation/:annee_Universitaire",
  },

  UES: {
    LIST: "/ues",
    DETAIL: "/ues/:code_Formation/:code_ue",
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

export const DATE_FORMAT = "DD/MM/YYYY";
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
  RECH: {
    KEY: "RECH",
    VALUE: "Recherche en cours",
    NEXT: "EC",
  },
  EC: {
    KEY: "EC",
    VALUE: "Stage en cours",
    NEXT: "TUT",
  },
  TUT: {
    KEY: "TUT",
    VALUE: "Tuteurs attribués",
    NEXT: "SOUT",
  },
  SOUT: {
    KEY: "SOUT",
    VALUE: "Sessions de soutenance définies",
    NEXT: "EVAL",
  },
  EVAL: {
    KEY: "EVAL",
    VALUE: "Stage évalué",
    NEXT: "EVAL",
  },
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

export const PROMOTION_TEXTS = {
  PROCESSUS_STAGE: {
    TOOLTIP: "Avancer le processus de stage",
    CHANGE_PROCESS: "Êtes-vous sûr de vouloir avancer le processus de stage ?",
  },
};

export const UBO_LINKS = {
  FACEBOOK: "https://www.facebook.com/UBO.UnivBrest",
  LINKEDIN: "https://www.linkedin.com/school/ubo/?originalSubdomain=fr",
  MAIL: "mailto:directeur.sciences@univ-brest.fr",
  YOUTUBE: "https://www.youtube.com/user/UnivBrest",
  TWITER: "https://twitter.com/UBO_UnivBrest",
};

export const SEXES = {
  H: {
    key: "H",
    value: "Homme",
  },
  F: {
    key: "F",
    value: "Femme",
  },
};
