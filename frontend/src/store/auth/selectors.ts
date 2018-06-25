import { createSelector } from "reselect";
import { AuthState } from "./state";

const authState = (state: any): AuthState => state.auth;

const getIsAuthenticated = createSelector(
  authState,
  state => state.isAuthenticated
);

const getToken = createSelector(
  authState,
  state => state.token ? state.token : undefined
);

export {
  getIsAuthenticated,
  getToken
};