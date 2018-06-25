import { AuthAction, Types } from "./actions";
import { AuthState, initialState } from "./state";

const toggleLoading = (state: AuthState): AuthState => ({
  ...state,
  isLoading: !state.isLoading
});

const addToken = (state: AuthState, payload: string): AuthState => ({
  ...state,
  token: payload
});

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case Types.CREATE_TOKEN:
      return toggleLoading(state);

    case Types.CREATE_TOKEN_SUCCESS:
      return addToken(toggleLoading(state), action.payload);

    case Types.CREATE_TOKEN_FAIL:
      return addToken(toggleLoading(state), action.payload);

    case Types.AUTHENTICATE:
      return { ...state, isAuthenticated: true };

    case Types.UNAUTHENTICATE:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
};