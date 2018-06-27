import * as selectors from "./selectors";
import { MessagesState } from "./state";

describe("Selectors: Messages", () => {
  const MESSAGE = "Hello I am a message";

  const MESSAGE_STATE: MessagesState = {
    isLoading: false,
    currentMessage: MESSAGE
  };

  const NO_MESSAGE_STATE: MessagesState = {
    isLoading: false,
    currentMessage: ""
  };

  const STATE = {
    messages: MESSAGE_STATE
  };

  const EMPTY_STATE = {
    messages: NO_MESSAGE_STATE
  };

  let result: any;

  describe("#getCurrentMessage", () => {
    it("Returns the current message", () => {
      result = selectors.getCurrentMessage(STATE);
      expect(result).toBe(MESSAGE);
    });

    it("Returns undefined if there is no message", () => {
      result = selectors.getCurrentMessage(EMPTY_STATE);
      expect(result).toBeUndefined();
    });
  });
});