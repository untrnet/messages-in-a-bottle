import { TestApi, testSaga } from "redux-saga-test-plan";

import { Types } from "./actions";
import { authSaga, createToken, fetchToken, initializeToken } from "./sagas";

describe("Saga: Auth", () => {
  const TOKEN = `5eea52c8c1c6f4f65afdf4c707f88915+1529936357318`;

  let saga: TestApi;
  let authMock: any;
  let tokenMock: any;
  let result: string;

  describe("#authSaga", () => {
    beforeEach(() => {
      saga = testSaga(authSaga);
    });

    it("Listens for a dispatched create token action", () => {
      saga.next()
        .takeLatestEffect(Types.CREATE_TOKEN, initializeToken);
    });
  });

  describe("#initializeToken", () => {
    beforeEach(() => {
      saga = testSaga(initializeToken);
    });

    describe("With a pre-existing token", () => {
      it("dispatches a CREATE_TOKEN_FAIL action", () => {
        saga.next()
          .call(fetchToken)
          .next()
          .put({ type: Types.CREATE_TOKEN_FAIL, payload: undefined });
      });
    });

    describe("Without a pre-existing token", () => {
      it("Creates a token and dispatches a CREATE_TOKEN_SUCCESS action", () => {
        saga.next()
          .next()
          .throw(new Error())
          .call(createToken)
          .next()
          .put({ type: Types.CREATE_TOKEN_SUCCESS, payload: undefined })
          .next()
          .put({ type: Types.AUTHENTICATE });
      });
    });
  });

  describe("#createToken", () => {
    beforeEach(async () => {
      authMock = {
        addToken: jest.fn(() => undefined)
      };

      tokenMock = {
        generate: jest.fn(() => new Promise((resolve) => resolve(TOKEN)))
      };

      result = await createToken(tokenMock, authMock);
    });

    it("Returns a newly generated token", () => {
      expect(result).toBe(TOKEN);
    });

    it("Uses the token provider to create the token", () => {
      expect(tokenMock.generate).toHaveBeenCalledTimes(1);
    });

    it("Uses the auth provider to save the created token", () => {
      expect(authMock.addToken).toHaveBeenCalledWith(TOKEN);
    });
  });

  describe("#fetchToken", () => {
    beforeEach(async () => {
      authMock = {
        fetchToken: jest.fn(() => new Promise((resolve) => resolve(TOKEN)))
      };

      result = await fetchToken(authMock);
    });

    it("Gets the pre-existing auth token from local storage", () => {
      expect(result).toBe(TOKEN);
    });

    it("Uses the auth storage service to get the token", () => {
      expect(authMock.fetchToken).toHaveBeenCalledTimes(1);
    });
  });
});