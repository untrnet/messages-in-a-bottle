import { Token } from "./Token";

const FINGERPRINT = "5eea52c8c1c6f4f65afdf4c707f88915";
const TIMESTAMP   = 1529936357318;
const DELIMITER   = "+";
const TOKEN       = `${FINGERPRINT}${DELIMITER}${TIMESTAMP}`;

const stubTime = () => (
  jest.spyOn(Date.prototype, "getTime")
    .mockImplementation(() => TIMESTAMP)
);

class MockFingerprint {
  public get(callback: any) {
    return callback(FINGERPRINT);
  }
}

describe("Provider: Token", () => {
  let result: string;

  beforeEach(() => {
    stubTime();
  });

  describe("#generate", () => {
    it("Creates a authentication token", async () => {
      result = await Token.generate(MockFingerprint);
      expect(result).toBe(TOKEN);
    });
  });
});