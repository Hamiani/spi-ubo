import api from "../../utils/api/candidat";
import { CommonActionTypes } from "../constants/action-types";
import { CandidatActionsBuilder } from "../constants/actions-builder";

export const get = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: CandidatActionsBuilder.GET,
  promise: () => api.get(),
  successCallback,
  errorCallback,
});

export const getOne = (id, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: CandidatActionsBuilder.GET_ONE,
  promise: () => api.getOne(id),
  successCallback,
  errorCallback,
});

export const remove = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: CandidatActionsBuilder.REMOVE,
  promise: () => api.remove(data),
  successCallback,
  errorCallback,
});
export const create = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: CandidatActionsBuilder.CREATE,
  promise: () => api.create(data),
  successCallback,
  errorCallback,
});
