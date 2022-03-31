const ueActions = {
  GET: {
    START: "ue.get:start",
    SUCCESS: "ue.get:success",
    FAIL: "ue.get:fail",
  },
  GET_ONE: {
    START: "ue.getOne:start",
    SUCCESS: "ue.getOne:success",
    FAIL: "ue.getOne:fail",
  },
  UPDATE: {
    START: "ue.update:start",
    SUCCESS: "ue.update:success",
    FAIL: "ue.update:fail",
  },
  CALCULATE_ETD: {
    START: "ue.calculateEtd:start",
    SUCCESS: "ue.calculateEtd:success",
    FAIL: "ue.calculateEtd:fail",
  },
  CLEAN_ETD_CALCULATION_ERROR: {
    SUCCESS: "ue.cleanCalculateEtd:success",
  },
};

export default ueActions;
