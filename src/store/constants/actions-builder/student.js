import { actions } from "../../reducers/student";
import { StudentActionsTypes } from "../action-types";

const studentActionsBuilder = {
  GET: {
    START: actions[StudentActionsTypes.GET.START],
    SUCCESS: actions[StudentActionsTypes.GET.SUCCESS],
    FAIL: actions[StudentActionsTypes.GET.FAIL]
  },
  GET_BY_PROMOTION: {
    START: actions[StudentActionsTypes.GET_BY_PROMOTION.START],
    SUCCESS: actions[StudentActionsTypes.GET_BY_PROMOTION.SUCCESS],
    FAIL: actions[StudentActionsTypes.GET_BY_PROMOTION.FAIL]
  },
  GET_ONE: {
    START: actions[StudentActionsTypes.GET_ONE.START],
    SUCCESS: actions[StudentActionsTypes.GET_ONE.SUCCESS],
    FAIL: actions[StudentActionsTypes.GET_ONE.FAIL]
  },
  CREATE: {
    START: actions[StudentActionsTypes.CREATE.START],
    SUCCESS: actions[StudentActionsTypes.CREATE.SUCCESS],
    FAIL: actions[StudentActionsTypes.CREATE.FAIL]
  },
  UPDATE: {
    START: actions[StudentActionsTypes.UPDATE.START],
    SUCCESS: actions[StudentActionsTypes.UPDATE.SUCCESS],
    FAIL: actions[StudentActionsTypes.UPDATE.FAIL]
  },
  REMOVE: {
    START: actions[StudentActionsTypes.REMOVE.START],
    SUCCESS: actions[StudentActionsTypes.REMOVE.SUCCESS],
    FAIL: actions[StudentActionsTypes.REMOVE.FAIL]
  }
};

export default studentActionsBuilder;
