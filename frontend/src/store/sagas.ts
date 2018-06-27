import { all, fork } from "redux-saga/effects";
import { authSaga } from "./auth/sagas";
import { messagesSaga } from "./messages/sagas";

export function * rootSaga() {
  yield all([
    fork(authSaga),
    fork(messagesSaga)
  ]);
}