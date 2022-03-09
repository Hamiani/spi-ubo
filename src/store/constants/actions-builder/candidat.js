import { actions } from "../../reducers/candidat";
import { CandidatActionsTypes } from "../action-types";

const formationActionsBuilder = {
  GET: {
    START: actions[CandidatActionsTypes.GET.START],
    SUCCESS: actions[CandidatActionsTypes.GET.SUCCESS],
    FAIL: actions[CandidatActionsTypes.GET.FAIL],
  },
  GET_ONE: {
    START: actions[CandidatActionsTypes.GET_ONE.START],
    SUCCESS: actions[CandidatActionsTypes.GET_ONE.SUCCESS],
    FAIL: actions[CandidatActionsTypes.GET_ONE.FAIL],
  },
  REMOVE: {
    START: actions[CandidatActionsTypes.REMOVE.START],
    SUCCESS: actions[CandidatActionsTypes.REMOVE.SUCCESS],
    FAIL: actions[CandidatActionsTypes.REMOVE.FAIL],
  },
  CREATE: {
    START: actions[CandidatActionsTypes.CREATE.START],
    SUCCESS: actions[CandidatActionsTypes.CREATE.SUCCESS],
    FAIL: actions[CandidatActionsTypes.CREATE.FAIL],
  },
};

export default formationActionsBuilder;
