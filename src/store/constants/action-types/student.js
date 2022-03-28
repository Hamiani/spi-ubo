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
  }
};

export default studentActions