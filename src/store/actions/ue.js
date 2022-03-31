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

export const getOne = (filter, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: UEActionBuilder.GET_ONE,
  promise: () => api.getOne(filter),
  successCallback,
  errorCallback,
});

export const update = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: UEActionBuilder.UPDATE,
  promise: () => api.update(data),
  successCallback,
  errorCallback,
});

export const calculateEtd = (data, successCallback, errorCallback) => ({
  type: CommonActionTypes.COMMON__API_CALL,
  subTypes: UEActionBuilder.CALCULATE_ETD,
  promise: () => api.calculateEtd(data),
  successCallback,
  errorCallback,
});

export const cleanEtdCalculationError = () => ({
  type: UEActionBuilder.CLEAN_ETD_CALCULATION_ERROR.SUCCESS,
});
