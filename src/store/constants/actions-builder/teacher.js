import { actions } from "../../reducers/teacher";
import { TeacherActionsTypes } from "../action-types";

const formationActionsBuilder = {
  GET: {
    START: actions[TeacherActionsTypes.GET.START],
    SUCCESS: actions[TeacherActionsTypes.GET.SUCCESS],
    FAIL: actions[TeacherActionsTypes.GET.FAIL],
  },
  GET_ONE: {
    START: actions[TeacherActionsTypes.GET_ONE.START],
    SUCCESS: actions[TeacherActionsTypes.GET_ONE.SUCCESS],
    FAIL: actions[TeacherActionsTypes.GET_ONE.FAIL],
  },
  REMOVE: {
    START: actions[TeacherActionsTypes.REMOVE.START],
    SUCCESS: actions[TeacherActionsTypes.REMOVE.SUCCESS],
    FAIL: actions[TeacherActionsTypes.REMOVE.FAIL],
  },
  CREATE: {
    START: actions[TeacherActionsTypes.CREATE.START],
    SUCCESS: actions[TeacherActionsTypes.CREATE.SUCCESS],
    FAIL: actions[TeacherActionsTypes.CREATE.FAIL],
  },
  GET_TYPES: {
    START: actions[TeacherActionsTypes.GET_TYPES.START],
    SUCCESS: actions[TeacherActionsTypes.GET_TYPES.SUCCESS],
    FAIL: actions[TeacherActionsTypes.GET_TYPES.FAIL],
  },
  GET_PAYS: {
    START: actions[TeacherActionsTypes.GET_PAYS.START],
    SUCCESS: actions[TeacherActionsTypes.GET_PAYS.SUCCESS],
    FAIL: actions[TeacherActionsTypes.GET_PAYS.FAIL],
  },
  GET_SEXES: {
    START: actions[TeacherActionsTypes.GET_SEXES.START],
    SUCCESS: actions[TeacherActionsTypes.GET_SEXES.SUCCESS],
    FAIL: actions[TeacherActionsTypes.GET_SEXES.FAIL],
  },
};

export default formationActionsBuilder;
