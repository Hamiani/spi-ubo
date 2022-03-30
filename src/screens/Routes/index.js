//import { checkAuthorization } from "./helper";

import NotFound from "../../Shared/NotFound";
import Teachers from "../Teachers";
import Promotions from "../Promotions";
import UEs from "../UEs"
import Students from "../Students"

const routes = [
  ...Promotions,
  ...Teachers,
  ...UEs,
  ...Students,
  { component: NotFound },
];

//export default (authorization) => checkAuthorization({ routes, authorization });
export default routes;
