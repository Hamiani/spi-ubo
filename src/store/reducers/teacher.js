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
const clientSlice = createSlice({
  name: storeTypes.TEACHER,
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
