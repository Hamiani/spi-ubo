import Detail from "./Detail";
import Update from "./Update";

import { PATHS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";

const routes = [
  {
    exact: true,
    component: Detail,
    path: PATHS.ETUDIANTS.DETAIL,
    // access: ROUTES_ACCESS.PRIVATE,
  },
  {
    exact: true,
    component: Update,
    path: PATHS.ETUDIANTS.UPDATE,
    // access: ROUTES_ACCESS.PRIVATE,
  },
];

export default MapRoutes(routes, Layout);
