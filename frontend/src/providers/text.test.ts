import * as text from "../config/enGB.json";
import * as provider from "./text";

describe("Provider: Text", () => {
  const TEXT = text;
  const ERROR_KEY = "noCurrentMessage";
  const MODAL_TEXT = text["modal"];

  describe("#getErrorText", () => {
    it("Gets the specified error text string", () => {
      expect(provider.getErrorText(ERROR_KEY)).toEqual(
        TEXT["errorMessages"]["noCurrentMessage"]
      );
    });
  });

  describe("#getModalText", () => {
    it("Gets all the text strings used within the app modal", () => {
      expect(provider.getModaltext()).toEqual(MODAL_TEXT);
    });
  });
});