//import { checkAuthorization } from "./helper";

import NotFound from "../../Shared/NotFound";
import Teachers from "../Teachers";
import Promotions from "../Promotions";

const routes = [
  ...Promotions,
  ...Teachers,
  { component: NotFound },
];

//export default (authorization) => checkAuthorization({ routes, authorization });
export default routes;
