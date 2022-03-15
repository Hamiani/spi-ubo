const promotionActions = {
  GET: {
    START: "promotion.get:start",
    SUCCESS: "promotion.get:success",
    FAIL: "promotion.get:fail",
  },
  GET_ONE: {
    START: "promotion.getOne:start",
    SUCCESS: "promotion.getOne:success",
    FAIL: "promotion.getOne:fail",
  },
  CREATE: {
    START: "promotion.create:start",
    SUCCESS: "promotion.create:success",
    FAIL: "promotion.create:fail",
  },
  REMOVE: {
    START: "promotion.remove:start",
    SUCCESS: "promotion.remove:success",
    FAIL: "promotion.remove:fail",
  },
  CHNANGE_PROCESS: {
    START: "promotion.changeProcess:start",
    SUCCESS: "promotion.changeProcess:success",
    FAIL: "promotion.changeProcess:fail",
  },
  GET_SALLES: {
    START: "promotion.getSalles:start",
    SUCCESS: "promotion.getSalles:success",
    FAIL: "promotion.getSalles:fail",
  },
};

export default promotionActions;
