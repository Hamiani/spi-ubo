import List from "./List";
import Create from "./Create";
import Detail from "./Detail";
import Update from "./Update";

import { PATHS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";

const routes = [
  {
    exact: true,
    component: Create,
    path: PATHS.TEACHERS.CREATE,
    // access: ROUTES_ACCESS.PRIVATE,
  },
  {
    exact: true,
    component: List,
    path: PATHS.TEACHERS.LIST,
    // access: ROUTES_ACCESS.PRIVATE,
  },
  {
    exact: true,
    component: Detail,
    path: PATHS.TEACHERS.DETAIL,
    // access: ROUTES_ACCESS.PRIVATE,
  },
  {
    exact: true,
    component: Update,
    path: PATHS.TEACHERS.UPDATE,
    // access: ROUTES_ACCESS.PRIVATE,
  },
];

export default MapRoutes(routes, Layout);
