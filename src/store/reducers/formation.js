import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { FormationActionsTypes } from "../constants/action-types";

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
  update: {
    data: null,
    errors: false,
    loading: false,
  },
};

const getReducer = {
  [FormationActionsTypes.GET.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [FormationActionsTypes.GET.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [FormationActionsTypes.GET.SUCCESS]: (state, action) => {
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
  [FormationActionsTypes.GET_ONE.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, getOne: { ...query } };
  },
  [FormationActionsTypes.GET_ONE.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, getOne: { ...query } };
  },
  [FormationActionsTypes.GET_ONE.SUCCESS]: (state, action) => {
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
  [FormationActionsTypes.REMOVE.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, remove: { ...query } };
  },
  [FormationActionsTypes.REMOVE.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, remove: { ...query } };
  },
  [FormationActionsTypes.REMOVE.SUCCESS]: (state, action) => {
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
  [FormationActionsTypes.CREATE.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, create: { ...query } };
  },
  [FormationActionsTypes.CREATE.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, create: { ...query } };
  },
  [FormationActionsTypes.CREATE.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, create: { ...query } };
  },
};

const updateReducer = {
  [FormationActionsTypes.UPDATE.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, update: { ...query } };
  },
  [FormationActionsTypes.UPDATE.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, update: { ...query } };
  },
  [FormationActionsTypes.UPDATE.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, update: { ...query } };
  },
};

const clientSlice = createSlice({
  name: storeTypes.FORMATION,
  initialState,
  reducers: {
    ...getReducer,
    ...getOneReducer,
    ...removeReducer,
    ...createReducer,
    ...updateReducer,
  },
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
