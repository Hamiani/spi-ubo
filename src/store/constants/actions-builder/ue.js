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
};

export default ueActionsBuilder;
