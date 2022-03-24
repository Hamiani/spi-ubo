import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { UEActionsTypes } from "../constants/action-types";

const initialState = {
  get: {
    data: [],
    idle: true,
    errors: false,
    loading: false,
  },
  getOne: {
    data: {},
    idle: true,
    errors: false,
    loading: false,
  },
};

const getReducer = {
  [UEActionsTypes.GET.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: [],
    };
    return { ...state, get: { ...query } };
  },
  [UEActionsTypes.GET.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: [],
    };
    return { ...state, get: { ...query } };
  },
  [UEActionsTypes.GET.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      idle: false,
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, get: { ...query } };
  },
};

const getOneReducer = {
  [UEActionsTypes.GET_ONE.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: {},
    };
    return { ...state, getOne: { ...query } };
  },
  [UEActionsTypes.GET_ONE.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: {},
    };
    return { ...state, getOne: { ...query } };
  },
  [UEActionsTypes.GET_ONE.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      idle: false,
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, getOne: { ...query } };
  },
};

const clientSlice = createSlice({
  name: storeTypes.UE,
  initialState,
  reducers: {
    ...getReducer,
    ...getOneReducer,
  },
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
