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

export const update = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: StudentActionsBuilder.UPDATE,
  promise: () => api.update(data),
  successCallback,
  errorCallback,
});

export const getFormations = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: StudentActionsBuilder.GET_FORMATIONS,
  promise: () => api.getFormations(),
  successCallback,
  errorCallback,
});

export const getPays = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: StudentActionsBuilder.GET_PAYS,
  promise: () => api.getPays(),
  successCallback,
  errorCallback,
});

export const getSexes = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: StudentActionsBuilder.GET_SEXES,
  promise: () => api.getSexes(),
  successCallback,
  errorCallback,
});
