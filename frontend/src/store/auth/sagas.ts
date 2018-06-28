import { call, put, takeLatest } from "redux-saga/effects";

import { AuthStorage } from "../../providers/AuthStorage";
import { Token } from "../../providers/Token";
import { Actions as MessageActions } from "../messages/actions";
import { Actions, Types } from "./actions";

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

function* initializeToken() {
  try {
    const existingToken = yield call(fetchToken);
    return yield put(Actions.CreateFail(existingToken));
  } catch (error) {
    const newToken = yield call(createToken);
    yield put(Actions.CreateSuccess(newToken));
    return yield put(Actions.Authenticate());
  } finally {
    yield put(MessageActions.Load());
  }
}

function* authSaga() {
  yield takeLatest(Types.CREATE_TOKEN, initializeToken);
}

export {
  authSaga,
  initializeToken,
  createToken,
  fetchToken
};