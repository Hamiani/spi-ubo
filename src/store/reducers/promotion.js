import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { PromotionActionsTypes } from "../constants/action-types";

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
  changeProcess: {
    data: null,
    errors: false,
    loading: false,
  },
  getSalles: {
    data: [],
    idle: true,
    errors: false,
    laoding: false,
  },
};

const getReducer = {
  [PromotionActionsTypes.GET.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: [],
    };
    return { ...state, get: { ...query } };
  },
  [PromotionActionsTypes.GET.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: [],
    };
    return { ...state, get: { ...query } };
  },
  [PromotionActionsTypes.GET.SUCCESS]: (state, action) => {
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
  [PromotionActionsTypes.GET_ONE.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: {},
    };
    return { ...state, getOne: { ...query } };
  },
  [PromotionActionsTypes.GET_ONE.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: {},
    };
    return { ...state, getOne: { ...query } };
  },
  [PromotionActionsTypes.GET_ONE.SUCCESS]: (state, action) => {
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
  [PromotionActionsTypes.REMOVE.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, remove: { ...query } };
  },
  [PromotionActionsTypes.REMOVE.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, remove: { ...query } };
  },
  [PromotionActionsTypes.REMOVE.SUCCESS]: (state, action) => {
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
  [PromotionActionsTypes.CREATE.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, create: { ...query } };
  },
  [PromotionActionsTypes.CREATE.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, create: { ...query } };
  },
  [PromotionActionsTypes.CREATE.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, create: { ...query } };
  },
};
const changeProcess = {
  [PromotionActionsTypes.CHNANGE_PROCESS.START]: (state) => {
    const query = {
      loading: true,
      errors: false,
      data: null,
    };
    return { ...state, changeProcess: { ...query } };
  },
  [PromotionActionsTypes.CHNANGE_PROCESS.FAIL]: (state) => {
    const query = {
      loading: false,
      errors: true,
      data: null,
    };
    return { ...state, changeProcess: { ...query } };
  },
  [PromotionActionsTypes.CHNANGE_PROCESS.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, changeProcess: { ...query } };
  },
};

const getSallesReducer = {
  [PromotionActionsTypes.GET_SALLES.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: [],
    };
    return { ...state, getSalles: { ...query } };
  },
  [PromotionActionsTypes.GET_SALLES.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: [],
    };
    return { ...state, getSalles: { ...query } };
  },
  [PromotionActionsTypes.GET_SALLES.SUCCESS]: (state, action) => {
    const { payload } = action;
    const query = {
      idle: false,
      loading: false,
      errors: false,
      data: payload,
    };
    return { ...state, getSalles: { ...query } };
  },
};

const clientSlice = createSlice({
  name: storeTypes.PROMOTION,
  initialState,
  reducers: {
    ...getReducer,
    ...getOneReducer,
    ...removeReducer,
    ...createReducer,
    ...changeProcess,
    ...getSallesReducer,
  },
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
