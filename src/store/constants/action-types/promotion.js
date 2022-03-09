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
};

export default promotionActions;
