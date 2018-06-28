import { AxiosRequestConfig } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { createConfigObject } from "../../providers/messages/helpers";
import { MessageResponse } from "../../providers/messages/interfaces";
import { MessagesService } from "../../providers/messages/messageService";
import { store } from "../../store";
import { getToken } from "../../store/auth/selectors";
import { Actions, Types } from "./actions";

const createConfig = () => {
  const token = getToken(store.getState());
  return createConfigObject(token as string);
};

const getMessagesFromApi = async (
  config: AxiosRequestConfig,
  service: MessagesService = new MessagesService(config)
) => {
  const message = await service.getCurrentMessage();
  return message;
};

const postMessageToApi = async (
  message: string,
  config: AxiosRequestConfig,
  service: MessagesService = new MessagesService(config)
) => {
  await service.postNewMessage(message);
};

function * getMessages() {
  const reqConfig = yield call(createConfig);
  try {
    const res: MessageResponse = yield call(getMessagesFromApi, reqConfig);
    yield put(Actions.LoadSuccess(res.message));
  } catch {
    yield put(Actions.LoadFail());
  }
}

function * postMessage(action: any) {
  const reqConfig = yield call(createConfig);
  try {
    yield call(postMessageToApi, action.payload, reqConfig);
    yield put(Actions.SubmitSuccess(action.payload));
  } catch {
    yield put(Actions.SubmitFail());
  }
}

function * messagesSaga() {
  yield takeLatest(Types.LOAD, getMessages);
  yield takeLatest(Types.SUBMIT, postMessage);
}

export {
  createConfig,
  getMessages,
  getMessagesFromApi,
  messagesSaga,
  postMessage
};
