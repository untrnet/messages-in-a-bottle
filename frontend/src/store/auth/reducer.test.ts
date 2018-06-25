import { Actions } from "./actions";
import { authReducer as reducer } from "./reducer";
import { AuthState } from "./state";

describe("Reducer: Auth", () => {
  const TOKEN = "12345abcd+000000";
  const PREVIOUS_TOKEN = "23456bcde+123456";

  const INITIAL_STATE: AuthState = {
    isLoading: false,
    isAuthenticated: false,
    token: ""
  };
  const LOADING_STATE: AuthState = {
    isLoading: true,
    isAuthenticated: false,
    token: ""
  };
  const AUTH_STATE: AuthState = {
    isLoading: false,
    isAuthenticated: true,
    token: TOKEN
  };

  let result: AuthState;

  describe("CREATE_TOKEN", () => {
    it("Sets the loading flag to true", () => {
      result = reducer(INITIAL_STATE, Actions.Create());
      expect(result.isLoading).toBeTruthy();
    });
  });

  describe("CREATE_TOKEN_SUCCESS", () => {
    beforeEach(() => {
      result = reducer(LOADING_STATE, Actions.CreateSuccess(TOKEN));
    });

    it("Sets the loading flag to false", () => {
      expect(result.isLoading).toBeFalsy();
    });

    it("Adds the created token to the state", () => {
      expect(result.token).toBe(TOKEN);
    });
  });

  describe("CREATE_TOKEN_FAIL", () => {
    beforeEach(() => {
      result = reducer(LOADING_STATE, Actions.CreateFail(PREVIOUS_TOKEN));
    });

    it("Sets the loading flag to false", () => {
      expect(result.isLoading).toBeFalsy();
    });

    it("Adds the previously used token to the state", () => {
      expect(result.token).toBe(PREVIOUS_TOKEN);
    });
  });

  describe("AUTHENTICATE", () => {
    it("Sets the isAuthenticated flag to true", () => {
      result = reducer(INITIAL_STATE, Actions.Authenticate());
      expect(result.isAuthenticated).toBeTruthy();
    });
  });

  describe("UNAUTHENTICATE", () => {
    it("Sets the isAuthenticated flag to false", () => {
      result = reducer(AUTH_STATE, Actions.Unauthenticate());
      expect(result.isAuthenticated).toBeFalsy();
    });
  });

  describe("By default", () => {
    it("Does not modify the existing state", () => {
      result = reducer(INITIAL_STATE, {} as any);
      expect(result).toEqual(INITIAL_STATE);
    });
  });
});