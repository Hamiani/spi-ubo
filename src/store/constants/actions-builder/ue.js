import { actions } from "../../reducers/ue";
import { UEActionsTypes } from "../action-types";

const ueActionsBuilder = {
  GET: {
    START: actions[UEActionsTypes.GET.START],
    SUCCESS: actions[UEActionsTypes.GET.SUCCESS],
    FAIL: actions[UEActionsTypes.GET.FAIL],
  },
  GET_ONE: {
    START: actions[UEActionsTypes.GET_ONE.START],
    SUCCESS: actions[UEActionsTypes.GET_ONE.SUCCESS],
    FAIL: actions[UEActionsTypes.GET_ONE.FAIL],
  },
  UPDATE: {
    START: actions[UEActionsTypes.UPDATE.START],
    SUCCESS: actions[UEActionsTypes.UPDATE.SUCCESS],
    FAIL: actions[UEActionsTypes.UPDATE.FAIL],
  },
  CALCULATE_ETD: {
    START: actions[UEActionsTypes.CALCULATE_ETD.START],
    SUCCESS: actions[UEActionsTypes.CALCULATE_ETD.SUCCESS],
    FAIL: actions[UEActionsTypes.CALCULATE_ETD.FAIL],
  },
  CLEAN_ETD_CALCULATION_ERROR: {
    SUCCESS: actions[UEActionsTypes.CLEAN_ETD_CALCULATION_ERROR.SUCCESS],
  },
};

export default ueActionsBuilder;
