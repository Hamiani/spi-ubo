import { actions } from "../../reducers/student";
import { StudentActionsTypes } from "../action-types";

const studentActionsBuilder = {
  GET: {
    START: actions[StudentActionsTypes.GET.START],
    SUCCESS: actions[StudentActionsTypes.GET.SUCCESS],
    FAIL: actions[StudentActionsTypes.GET.FAIL],
  },
  GET_BY_PROMOTION: {
    START: actions[StudentActionsTypes.GET_BY_PROMOTION.START],
    SUCCESS: actions[StudentActionsTypes.GET_BY_PROMOTION.SUCCESS],
    FAIL: actions[StudentActionsTypes.GET_BY_PROMOTION.FAIL],
  },
  GET_ONE: {
    START: actions[StudentActionsTypes.GET_ONE.START],
    SUCCESS: actions[StudentActionsTypes.GET_ONE.SUCCESS],
    FAIL: actions[StudentActionsTypes.GET_ONE.FAIL],
  },
  CREATE: {
    START: actions[StudentActionsTypes.CREATE.START],
    SUCCESS: actions[StudentActionsTypes.CREATE.SUCCESS],
    FAIL: actions[StudentActionsTypes.CREATE.FAIL],
  },
};

export default studentActionsBuilder;
