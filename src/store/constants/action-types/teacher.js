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
};

export default teacherActions;
