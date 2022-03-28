import { createSlice } from "@reduxjs/toolkit";
import storeTypes from "../constants/store-types";
import { StudentActionsTypes } from "../constants/action-types";

const initialState = {
  get: {
    data: [],
    idle: true,
    errors: false,
    loading: false,
  },
  getByPromotion: {
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
  [StudentActionsTypes.GET.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: [],
    };
    return { ...state, get: { ...query } };
  },
  [StudentActionsTypes.GET.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: [],
    };
    return { ...state, get: { ...query } };
  },
  [StudentActionsTypes.GET.SUCCESS]: (state, action) => {
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

const getByPromotionReducer = {
  [StudentActionsTypes.GET_BY_PROMOTION.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: [],
    };
    return { ...state, get: { ...query } };
  },
  [StudentActionsTypes.GET_BY_PROMOTION.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: [],
    };
    return { ...state, get: { ...query } };
  },
  [StudentActionsTypes.GET_BY_PROMOTION.SUCCESS]: (state, action) => {
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
  [StudentActionsTypes.GET_ONE.START]: (state) => {
    const query = {
      idle: false,
      loading: true,
      errors: false,
      data: {},
    };
    return { ...state, getOne: { ...query } };
  },
  [StudentActionsTypes.GET_ONE.FAIL]: (state) => {
    const query = {
      idle: false,
      loading: false,
      errors: true,
      data: {},
    };
    return { ...state, getOne: { ...query } };
  },
  [StudentActionsTypes.GET_ONE.SUCCESS]: (state, action) => {
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
  name: storeTypes.STUDENT,
  initialState,
  reducers: {
    ...getReducer,
    ...getByPromotionReducer,
    ...getOneReducer,
  },
});

export const { actions } = clientSlice;

export default clientSlice.reducer;
