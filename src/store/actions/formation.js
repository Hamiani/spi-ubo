import api from "../../utils/api/formation";
import { CommonActionTypes } from "../constants/action-types";
import { FormationActionsBuilder } from "../constants/actions-builder";

export const get = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: FormationActionsBuilder.GET,
  promise: () => api.get(),
  successCallback,
  errorCallback,
});

export const getOne = (id, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: FormationActionsBuilder.GET_ONE,
  promise: () => api.getOne(id),
  successCallback,
  errorCallback,
});

export const remove = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: FormationActionsBuilder.REMOVE,
  promise: () => api.remove(data),
  successCallback,
  errorCallback,
});

export const create = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: FormationActionsBuilder.CREATE,
  promise: () => api.create(data),
  successCallback,
  errorCallback,
});

export const update = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: FormationActionsBuilder.UPDATE,
  promise: () => api.update(data),
  successCallback,
  errorCallback,
});


