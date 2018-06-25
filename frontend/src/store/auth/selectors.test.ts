import * as selectors from "./selectors";
import { AuthState } from "./state";

describe("Selectors: Auth", () => {
  const TOKEN = "12345abcd+000000";
  const AUTH: AuthState = {
    isLoading: false,
    isAuthenticated: true,
    token: TOKEN
  };
  const UNAUTH: AuthState = {
    isLoading: false,
    isAuthenticated: false,
    token: ""
  };
  const AUTH_STATE = {
    auth: AUTH
  };
  const UNAUTH_STATE = {
    auth: UNAUTH
  };

  let result: any;

  describe("#getIsAuthenticated", () => {
    it("Returns true if the user is authenticated", () => {
      result = selectors.getIsAuthenticated(AUTH_STATE);
      expect(result).toBeTruthy();
    });

    it("Returns false if the user is not authenticated", () => {
      result = selectors.getIsAuthenticated(UNAUTH_STATE);
      expect(result).toBeFalsy();
    });
  });

  describe("#getToken", () => {
    it("Retrieves the user's authentication token", () => {
      result = selectors.getToken(AUTH_STATE);
      expect(result).toBe(TOKEN);
    });

    it("Returns undefined if there is no token", () => {
      result = selectors.getToken(UNAUTH_STATE);
      expect(result).toBeUndefined();
    });
  });
});