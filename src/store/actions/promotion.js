import api from "../../utils/api/promotion";
import { CommonActionTypes } from "../constants/action-types";
import { PromotionActionsBuilder } from "../constants/actions-builder";

export const get = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: PromotionActionsBuilder.GET,
  promise: () => api.get(),
  successCallback,
  errorCallback,
});

export const getOne = (filter, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: PromotionActionsBuilder.GET_ONE,
  promise: () => api.getOne(filter),
  successCallback,
  errorCallback,
});

export const remove = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: PromotionActionsBuilder.REMOVE,
  promise: () => api.remove(data),
  successCallback,
  errorCallback,
});

export const create = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: PromotionActionsBuilder.CREATE,
  promise: () => api.create(data),
  successCallback,
  errorCallback,
});

export const changeProcess = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: PromotionActionsBuilder.CHNANGE_PROCESS,
  promise: () => api.changeProcess(data),
  successCallback,
  errorCallback,
});
