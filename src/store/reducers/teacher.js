import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { TeacherActionsTypes } from "../constants/action-types";

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
  getTypes: {
    data: null,
    idle: true,
    errors: false,
    loading: false,
  },
  getPays: {
    data: null,
    idle: true,
    errors: false,
    loading: false,
  },
  getSexes: {
    data: null,
    idle: true,
    errors: false,
    loading: false,
  },
};

const getReducer = {
  [TeacherActionsTypes.GET.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [TeacherActionsTypes.GET.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, get: { ...query } };
  },
  [TeacherActionsTypes.GET.SUCCESS]: (state, action) => {
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
  [TeacherActionsTypes.GET_ONE.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, getOne: { ...query } };
  },
  [TeacherActionsTypes.GET_ONE.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, getOne: { ...query } };
  },
  [TeacherActionsTypes.GET_ONE.SUCCESS]: (state, action) => {
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
  [TeacherActionsTypes.REMOVE.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, remove: { ...query } };
  },
  [TeacherActionsTypes.REMOVE.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, remove: { ...query } };
  },
  [TeacherActionsTypes.REMOVE.SUCCESS]: (state, action) => {
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
  [TeacherActionsTypes.CREATE.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, create: { ...query } };
  },
  [TeacherActionsTypes.CREATE.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, create: { ...query } };
  },
  [TeacherActionsTypes.CREATE.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, create: { ...query } };
  },
};

const getTypesReducer = {
  [TeacherActionsTypes.GET_TYPES.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, getTypes: { ...query } };
  },
  [TeacherActionsTypes.GET_TYPES.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, getTypes: { ...query } };
  },
  [TeacherActionsTypes.GET_TYPES.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, getTypes: { ...query } };
  },
};

const getPaysReducer = {
  [TeacherActionsTypes.GET_PAYS.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, getPays: { ...query } };
  },
  [TeacherActionsTypes.GET_PAYS.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, getPays: { ...query } };
  },
  [TeacherActionsTypes.GET_PAYS.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, getPays: { ...query } };
  },
};

const getSexesReducer = {
  [TeacherActionsTypes.GET_SEXES.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, getSexes: { ...query } };
  },
  [TeacherActionsTypes.GET_SEXES.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, getSexes: { ...query } };
  },
  [TeacherActionsTypes.GET_SEXES.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, getSexes: { ...query } };
  },
};

const clientSlice = createSlice({
  name: storeTypes.TEACHER,
  initialState,
  reducers: {
    ...getReducer,
    ...getOneReducer,
    ...removeReducer,
    ...createReducer,
    ...getTypesReducer,
    ...getPaysReducer,
    ...getSexesReducer,
  },
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
