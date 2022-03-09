import { actions } from "../../reducers/auth";
import { AuthActionTypes } from "../action-types";

const authActionsBuilder = {
  REGISTER: {
    START: actions[AuthActionTypes.REGISTER.START],
    SUCCESS: actions[AuthActionTypes.REGISTER.SUCCESS],
    FAIL: actions[AuthActionTypes.REGISTER.FAIL],
  },
  LOGIN: {
    START: actions[AuthActionTypes.LOGIN.START],
    SUCCESS: actions[AuthActionTypes.LOGIN.SUCCESS],
    FAIL: actions[AuthActionTypes.LOGIN.FAIL],
  },
};


export default authActionsBuilder;
