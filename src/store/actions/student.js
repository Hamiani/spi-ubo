import api from "../../utils/api/student";
import { CommonActionTypes } from "../constants/action-types";
import { StudentActionsBuilder } from "../constants/actions-builder";

export const get = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: StudentActionsBuilder.GET,
  promise: () => api.get(),
  successCallback,
  errorCallback,
});

export const getByPromotion = (
  code_Formation = "",
  annee_Universitaire = "",
  successCallback,
  errorCallback
) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: StudentActionsBuilder.GET_BY_PROMOTION,
  promise: () => api.getByPromotion(code_Formation, annee_Universitaire),
  successCallback,
  errorCallback,
});

export const getOne = (id = 0, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: StudentActionsBuilder.GET_ONE,
  promise: () => api.getOne(id),
  successCallback,
  errorCallback,
});
