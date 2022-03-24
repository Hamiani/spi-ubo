import storeTypes from "../constants/store-types";

import authReducer from "./auth";
import formationReducer from "./formation";
import teacherReducer from "./teacher";
import candidatReducer from "./candidat";
import promotionReducer from "./promotion";
import ueReducer from "./ue";

const reducers = {
  [storeTypes.AUTH]: authReducer,
  [storeTypes.FORMATION]: formationReducer,
  [storeTypes.TEACHER]: teacherReducer,
  [storeTypes.CANDIDAT]: candidatReducer,
  [storeTypes.PROMOTION]: promotionReducer,
  [storeTypes.UE]: ueReducer,
};

export default reducers;
