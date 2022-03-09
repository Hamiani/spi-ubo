const candidatActions = {
  GET: {
    START: "candidat.get:start",
    SUCCESS: "candidat.get:success",
    FAIL: "candidat.get:fail",
  },
  GET_ONE: {
    START: "candidat.getOne:start",
    SUCCESS: "candidat.getOne:success",
    FAIL: "candidat.getOne:fail",
  },
  REMOVE: {
    START: "candidat.remove:start",
    SUCCESS: "candidat.remove:success",
    FAIL: "candidat.remove:fail",
  },
  CREATE: {
    START: "candidat.create:start",
    SUCCESS: "candidat.create:success",
    FAIL: "candidat.create:fail",
  },
};

export default candidatActions;
