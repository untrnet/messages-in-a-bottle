import { call, put, takeLatest } from "redux-saga/effects";
import { actions, Types } from "./actions";

import { AuthStorage } from "../../providers/AuthStorage";
import { Token } from "../../providers/Token";

const createToken = async (
  provider = new Token(),
  auth = new AuthStorage()
) => {
  const newToken = await provider.generate();
  auth.addToken(newToken);
  return newToken;
};

const fetchToken = async (provider = new AuthStorage()) => {
  const token = await provider.fetchToken();
  return token;
};

function * initializeToken() {
  try {
    const existingToken = yield call(fetchToken);
    return yield put(actions.CreateFail(existingToken));
  } catch (error) {
    const newToken = yield call(createToken);
    return yield put(actions.createSuccess(newToken));
  }
}

function * authSaga() {
  yield takeLatest(Types.CREATE_TOKEN, initializeToken);
}

export {
  authSaga,
  initializeToken,
  createToken,
  fetchToken
};