const studentActions = {
  GET: {
    START: "student.get:start",
    SUCCESS: "student.get:success",
    FAIL: "student.get:fail",
  },
  GET_BY_PROMOTION: {
    START: "student.getByPromotion:start",
    SUCCESS: "student.getByPromotion:success",
    FAIL: "student.getByPromotion:fail",
  },
  GET_ONE: {
    START: "student.getOne:start",
    SUCCESS: "student.getOne:success",
    FAIL: "student.getOne:fail",
  },
  CREATE: {
    START: "student.create:start",
    SUCCESS: "student.create:success",
    FAIL: "student.create:fail",
  },
  UPDATE: {
    START: "student.update:start",
    SUCCESS: "student.update:success",
    FAIL: "student.update:fail",
  }
};

export default studentActions