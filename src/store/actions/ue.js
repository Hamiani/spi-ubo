import api from "../../utils/api/ue";
import { CommonActionTypes } from "../constants/action-types";
import { UEActionBuilder } from "../constants/actions-builder";

export const get = (successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: UEActionBuilder.GET,
  promise: () => api.get(),
  successCallback,
  errorCallback,
});

export const getOne = (id, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: UEActionBuilder.GET_ONE,
  promise: () => api.getOne(id),
  successCallback,
  errorCallback,
});