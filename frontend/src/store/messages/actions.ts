import { Action } from "redux";

export enum Types {
  LOAD = "[Messages] Load",
  LOAD_SUCCESS = "[Messages] Load Success",
  LOAD_FAIL = "[Messages] Load Fail",
  SUBMIT = "[Messages] Submit",
  SUBMIT_SUCCESS = "[Messages] Submit Success",
  SUBMIT_FAIL = "[Messages] Submit Fail"
}

interface Load extends Action {
  type: Types.LOAD;
}

interface LoadSuccess extends Action {
  type: Types.LOAD_SUCCESS;
  payload: string;
}

interface LoadFail extends Action {
  type: Types.LOAD_FAIL;
}

interface Submit extends Action {
  type: Types.SUBMIT;
  payload: string;
}

interface SubmitSuccess extends Action {
  type: Types.SUBMIT_SUCCESS;
  payload: string;
}

interface SubmitFail extends Action {
  type: Types.SUBMIT_FAIL;
}

const loadMessage = (): Load => ({
  type: Types.LOAD
});

const loadMessageSuccess = (loadedMessage: string): LoadSuccess => ({
  type: Types.LOAD_SUCCESS,
  payload: loadedMessage
});

const loadMessageFail = (): LoadFail => ({
  type: Types.LOAD_FAIL
});

const submitMessage = (newMessage: string): Submit => ({
  type: Types.SUBMIT,
  payload: newMessage
});

const submitMessageSuccess = (newMessage: string): SubmitSuccess => ({
  type: Types.SUBMIT_SUCCESS,
  payload: newMessage
});

const submitMessageFail = (): SubmitFail => ({
  type: Types.SUBMIT_FAIL
});

export const Actions = {
  Load: loadMessage,
  LoadSuccess: loadMessageSuccess,
  LoadFail: loadMessageFail,
  Submit: submitMessage,
  SubmitSuccess: submitMessageSuccess,
  SubmitFail: submitMessageFail
};

export type MessagesAction = Load
  | LoadSuccess
  | LoadFail
  | Submit
  | SubmitSuccess
  | SubmitFail;