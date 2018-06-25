import { AuthStorage } from "./AuthStorage";

describe("Provider: LocalStorage", () => {
  const ERROR_MESSAGE = "token not found";
  const KEY           = "Authorization";
  const TOKEN         = `5eea52c8c1c6f4f65afdf4c707f88915+1529936357318`;
  const TOKEN_2       = `6eea52c8c1c6f4f65afdf4c707f88915+1529936357666`;

  let provider: AuthStorage;

  beforeEach(() => {
    provider = new AuthStorage();
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe("#fetchToken", () => {
    describe("Without a previously used auth token", () => {
      it("Throws an error", () => {
        expect(() => provider.fetchToken()).toThrowError(ERROR_MESSAGE);
      });
    });

    describe("With a previously used auth token", () => {
      it("Returns the saved token", () => {
        localStorage.setItem(KEY, TOKEN);
        expect(provider.fetchToken()).toBe(TOKEN);
      });
    });
  });

  describe("#addToken", () => {
    beforeEach(() => {
      provider.addToken(TOKEN);
    });

    it("Saves a newly generated token to localStorage with the correct key", () => {
      expect(localStorage.getItem(KEY)).toBe(TOKEN);
    });

    it("Does not overwrite any existing tokens", () => {
      provider.addToken(TOKEN_2);
      expect(localStorage.getItem(KEY)).not.toBe(TOKEN_2);
    });
  });
});