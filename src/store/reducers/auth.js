import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { AuthActionTypes } from "../constants/action-types";

const initialState = {
  register: {
    data: null,
    errors: false,
    loading: false,
  },
  login: {
    data: null,
    errors: false,
    loading: false,
  },
};

const registerReducer = {
  [AuthActionTypes.REGISTER.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, register: { ...query } };
  },
  [AuthActionTypes.REGISTER.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, register: { ...query } };
  },
  [AuthActionTypes.REGISTER.SUCCESS]: (state, action) => {
    const {
      payload: { data },
    } = action;
    const query = {
      loading: false,
      errors: false,
      data,
    };
    return { ...state, register: { ...query } };
  },
};

const loginReducer = {
  [AuthActionTypes.LOGIN.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, login: { ...query } };
  },
  [AuthActionTypes.LOGIN.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, login: { ...query } };
  },
  [AuthActionTypes.LOGIN.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, login: { ...query } };
  },
};

const clientSlice = createSlice({
  name: storeTypes.AUTH,
  initialState,
  reducers: {
    ...registerReducer,
    ...loginReducer,
  },
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
