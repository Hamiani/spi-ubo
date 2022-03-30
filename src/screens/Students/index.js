import Detail from "./Detail";

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
];

export default MapRoutes(routes, Layout);
