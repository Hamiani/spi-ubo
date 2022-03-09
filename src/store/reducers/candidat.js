import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { CandidatActionsTypes } from "../constants/action-types";

const initialState = {
  get: {
    data: null,
    idle: true,
    errors: false,
    loading: false,
  },
  getOne: {
    data: null,
    idle: true,
    errors: false,
    loading: false,
  },
  remove: {
    data: null,
    errors: false,
    loading: false,
  },
  create: {
    data: null,
    errors: false,
    loading: false,
  },
};

const getReducer = {
  [CandidatActionsTypes.GET.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [CandidatActionsTypes.GET.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [CandidatActionsTypes.GET.SUCCESS]: (state, action) => {
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
  [CandidatActionsTypes.GET_ONE.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, getOne: { ...query } };
  },
  [CandidatActionsTypes.GET_ONE.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, getOne: { ...query } };
  },
  [CandidatActionsTypes.GET_ONE.SUCCESS]: (state, action) => {
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

const removeReducer = {
  [CandidatActionsTypes.REMOVE.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, remove: { ...query } };
  },
  [CandidatActionsTypes.REMOVE.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, remove: { ...query } };
  },
  [CandidatActionsTypes.REMOVE.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, remove: { ...query } };
  },
};

const createReducer = {
  [CandidatActionsTypes.CREATE.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, create: { ...query } };
  },
  [CandidatActionsTypes.CREATE.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, create: { ...query } };
  },
  [CandidatActionsTypes.CREATE.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, create: { ...query } };
  },
};
const clientSlice = createSlice({
  name: storeTypes.CANDIDAT,
  initialState,
  reducers: {
    ...getReducer,
    ...getOneReducer,
    ...removeReducer,
    ...createReducer,
  },
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
