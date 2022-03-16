import api from "../../utils/api/teacher";
import { CommonActionTypes } from "../constants/action-types";
import { TeacherActionsBuilder } from "../constants/actions-builder";

export const get = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeacherActionsBuilder.GET,
  promise: () => api.get(),
  successCallback,
  errorCallback,
});

export const getOne = (id, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeacherActionsBuilder.GET_ONE,
  promise: () => api.getOne(id),
  successCallback,
  errorCallback,
});

export const remove = (id, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeacherActionsBuilder.REMOVE,
  promise: () => api.remove(id),
  successCallback,
  errorCallback,
});

export const create = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeacherActionsBuilder.CREATE,
  promise: () => api.create(data),
  successCallback,
  errorCallback,
});


export const update = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeacherActionsBuilder.UPDATE,
  promise: () => api.update(data),
  successCallback,
  errorCallback,
});

export const getTypes = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeacherActionsBuilder.GET_TYPES,
  promise: () => api.getTypes(),
  successCallback,
  errorCallback,
});

export const getPays = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeacherActionsBuilder.GET_PAYS,
  promise: () => api.getPays(),
  successCallback,
  errorCallback,
});

export const getSexes = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: TeacherActionsBuilder.GET_SEXES,
  promise: () => api.getSexes(),
  successCallback,
  errorCallback,
});
