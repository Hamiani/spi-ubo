const teacherActions = {
  GET: {
    START: "teacher.get:start",
    SUCCESS: "teacher.get:success",
    FAIL: "teacher.get:fail",
  },
  GET_ONE: {
    START: "teacher.getOne:start",
    SUCCESS: "teacher.getOne:success",
    FAIL: "teacher.getOne:fail",
  },
  REMOVE: {
    START: "teacher.remove:start",
    SUCCESS: "teacher.remove:success",
    FAIL: "teacher.remove:fail",
  },
  CREATE: {
    START: "teacher.create:start",
    SUCCESS: "teacher.create:success",
    FAIL: "teacher.create:fail",
  },
  UPDATE: {
    START: "teacher.update:start",
    SUCCESS: "teacher.update:success",
    FAIL: "teacher.update:fail",
  },
  GET_TYPES: {
    START: "teacher.getTypes:start",
    SUCCESS: "teacher.getTypes:success",
    FAIL: "teacher.getTypes:fail",
  },
  GET_PAYS: {
    START: "teacher.getPays:start",
    SUCCESS: "teacher.getPays:success",
    FAIL: "teacher.getPays:fail",
  },
  GET_SEXES: {
    START: "teacher.getSexes:start",
    SUCCESS: "teacher.getSexes:success",
    FAIL: "teacher.getSexes:fail",
  },
};

export default teacherActions;
