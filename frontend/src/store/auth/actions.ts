import { Action } from "redux";

export enum Types {
  CREATE_TOKEN = "[Auth] Create Token",
  CREATE_TOKEN_SUCCESS = "[Auth] Create Token Success",
  CREATE_TOKEN_FAIL = "[Auth] Create Token Fail",
  AUTHENTICATE = "[Auth] Authenticate",
  UNAUTHENTICATE = "[Auth] Un-authenticate"
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

interface Authenticate extends Action {
  type: Types.AUTHENTICATE;
}

interface Unauthenticate extends Action {
  type: Types.UNAUTHENTICATE;
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

const authenticate = (): Authenticate => ({
  type: Types.AUTHENTICATE
});

const unauthenticate = (): Unauthenticate => ({
  type: Types.UNAUTHENTICATE
});

export const Actions = {
  Create: createToken,
  CreateSuccess: createTokenSuccess,
  CreateFail: createTokenFail,
  Authenticate: authenticate,
  Unauthenticate: unauthenticate
};

export type AuthAction = Create
  | CreateSuccess
  | CreateFail
  | Authenticate
  | Unauthenticate;