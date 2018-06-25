import { Action } from "redux";

export enum Types {
  CREATE_TOKEN = "[Auth] Create Token",
  CREATE_TOKEN_SUCCESS = "[Auth] Create Token Success",
  CREATE_TOKEN_FAIL = "[Auth] Create Token Fail"
}

interface Create extends Action {
  type: Types.CREATE_TOKEN;
}

interface CreateSuccess extends Action {
  type: Types.CREATE_TOKEN_SUCCESS;
  payload: string;
}

interface CreateFail extends Action {
  type: Types.CREATE_TOKEN_FAIL;
  payload: string;
}

const createToken = (): Create => ({
  type: Types.CREATE_TOKEN
});

const createTokenSuccess = (token: string): CreateSuccess => ({
  type: Types.CREATE_TOKEN_SUCCESS,
  payload: token
});

const createTokenFail = (token: string): CreateFail => ({
  type: Types.CREATE_TOKEN_FAIL,
  payload: token
});

export const actions = {
  create: createToken,
  createSuccess: createTokenSuccess,
  CreateFail: createTokenFail
};

export type AuthAction = Create | CreateSuccess | CreateFail;