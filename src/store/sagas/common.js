import { takeEvery, call, put /* , take, race */ } from "redux-saga/effects";
//import get from "lodash/get";
import CommonActions from "../constants/action-types/common";

function* handleApiCall(action) {
  const {
    promise,
    subTypes,
    successCallback = () => {},
    errorCallback = () => {},
  } = action;
  const { START, SUCCESS, FAIL } = subTypes;

  yield put(START());

  try {
    const response = (yield call(promise)) || {};
    //const data = get(response, "data");
    // console.log("data :>> ", data);
    //const totalItems = get(response, "totalItems", 0);
    yield put(SUCCESS(response));
    successCallback(response);
  } catch (e) {
    const errors = (e && e.errors) || e;

    yield put(FAIL(errors));
    errorCallback(errors);
  }
}

function* watch() {
  yield takeEvery(CommonActions.COMMON__API_CALL, handleApiCall);
  //yield takeEvery(CommonActions.COMMON__API_CALL, handleCallbacks);
}

export default watch;
