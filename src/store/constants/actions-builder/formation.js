import { actions } from "../../reducers/formation";
import { FormationActionsTypes } from "../action-types";

const formationActionsBuilder = {
  GET: {
    START: actions[FormationActionsTypes.GET.START],
    SUCCESS: actions[FormationActionsTypes.GET.SUCCESS],
    FAIL: actions[FormationActionsTypes.GET.FAIL],
  },
  GET_ONE: {
    START: actions[FormationActionsTypes.GET_ONE.START],
    SUCCESS: actions[FormationActionsTypes.GET_ONE.SUCCESS],
    FAIL: actions[FormationActionsTypes.GET_ONE.FAIL],
  },
  REMOVE: {
    START: actions[FormationActionsTypes.REMOVE.START],
    SUCCESS: actions[FormationActionsTypes.REMOVE.SUCCESS],
    FAIL: actions[FormationActionsTypes.REMOVE.FAIL],
  },
  CREATE: {
    START: actions[FormationActionsTypes.CREATE.START],
    SUCCESS: actions[FormationActionsTypes.CREATE.SUCCESS],
    FAIL: actions[FormationActionsTypes.CREATE.FAIL],
  },
  UPDATE: {
    START: actions[FormationActionsTypes.UPDATE.START],
    SUCCESS: actions[FormationActionsTypes.UPDATE.SUCCESS],
    FAIL: actions[FormationActionsTypes.UPDATE.FAIL],
  },
};

export default formationActionsBuilder;
