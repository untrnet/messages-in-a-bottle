import { AxiosRequestConfig } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import { createConfigObject } from "../../providers/messages/helpers";
import { MessageResponse } from "../../providers/messages/interfaces";
import { MessagesService } from "../../providers/messages/messageService";
import { store } from "../../store";
import { getToken } from "../../store/auth/selectors";
import { Actions, Types } from "./actions";

// const createConfig = (token: string) => createConfigObject(token);
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

function * getMessages() {
  const reqConfig = yield call(createConfig);
  const res: MessageResponse = yield getMessagesFromApi(reqConfig);
  yield put(Actions.LoadSuccess(res.message));
}

function * messagesSaga() {
  yield takeLatest(Types.LOAD, getMessages);
}

export {
  messagesSaga
};
