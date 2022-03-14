import List from "./List";
import Create from "./Create";

import { PATHS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";

const routes = [
  {
    exact: true,
    component: Create,
    path: PATHS.PROMOTIONS.CREATE,
    // access: ROUTES_ACCESS.PRIVATE,
  },
  {
    exact: true,
    component: List,
    path: PATHS.HOME,
    // access: ROUTES_ACCESS.PRIVATE,
  },
];

export default MapRoutes(routes, Layout);
