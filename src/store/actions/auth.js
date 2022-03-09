import api from "../../utils/api/auth";
import { CommonActionTypes } from "../constants/action-types";
import { AuthActionsBuilder } from "../constants/actions-builder";

export const register = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: AuthActionsBuilder.REGISTER,
  promise: () => api.register(data),
  successCallback,
  errorCallback,
});


export const login = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: AuthActionsBuilder.LOGIN,
  promise: () => api.login(data),
  successCallback,
  errorCallback,
});
