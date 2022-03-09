const formationActions = {
  GET: {
    START: "formation.get:start",
    SUCCESS: "formation.get:success",
    FAIL: "formation.get:fail",
  },
  GET_ONE: {
    START: "formation.getOne:start",
    SUCCESS: "formation.getOne:success",
    FAIL: "formation.getOne:fail",
  },
  REMOVE: {
    START: "formation.remove:start",
    SUCCESS: "formation.remove:success",
    FAIL: "formation.remove:fail",
  },
  CREATE: {
    START: "formation.create:start",
    SUCCESS: "formation.create:success",
    FAIL: "formation.create:fail",
  },
  UPDATE: {
    START: "formation.update:start",
    SUCCESS: "formation.update:success",
    FAIL: "formation.update:fail",
  },
};

export default formationActions;
