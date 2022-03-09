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
};

export default formationActionsBuilder;
