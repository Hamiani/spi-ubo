import List from "./List";
import Detail from "./Detail";

import { PATHS } from "../../utils/constants";
import { MapRoutes } from "../../utils/helpers";
import Layout from "../../Shared/Layout";

const routes = [
  {
    exact: true,
    component: List,
    path: PATHS.UES.LIST,
  },
  {
    exact: true,
    component: Detail,
    path: PATHS.UES.DETAIL,
  },
];

export default MapRoutes(routes, Layout);
