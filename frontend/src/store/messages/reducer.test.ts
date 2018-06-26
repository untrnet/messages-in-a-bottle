import { Actions } from "./actions";
import { messagesReducer as reducer } from "./reducer";
import { MessagesState } from "./state";

describe("Reducer: Messages", () => {
  const MESSAGE = "Hello I am a message what's been loaded";
  const NEW_MESSAGE = "Hello I am a message what's been submitted";

  const INITIAL_STATE: MessagesState = {
    isLoading: false,
    currentMessage: ""
  };

  const LOADING_STATE: MessagesState = {
    isLoading: true,
    currentMessage: ""
  };

  const MESSAGE_LOADED_STATE: MessagesState = {
    isLoading: false,
    currentMessage: MESSAGE
  };

  const LOADING_NEW_MESSAGE_STATE: MessagesState = {
    isLoading: true,
    currentMessage: MESSAGE
  };

  let result: MessagesState;

  describe("LOAD", () => {
    it("Sets the isLoading flag to true", () => {
      result = reducer(INITIAL_STATE, Actions.Load());
      expect(result.isLoading).toBeTruthy();
    });

    it("Does not update the flag if it's already set to true", () => {
      result = reducer(LOADING_STATE, Actions.Load());
      expect(result.isLoading).toBeTruthy();
    });
  });

  describe("LOAD_SUCCESS", () => {
    beforeEach(() => {
      result = reducer(LOADING_STATE, Actions.LoadSuccess(MESSAGE));
    });

    it("Adds the loaded message to the store", () => {
      expect(result.currentMessage).toBe(MESSAGE);
    });

    it("Sets the loading flag to false", () => {
      expect(result.isLoading).toBeFalsy();
    });
  });

  describe("LOAD_FAIL", () => {
    it("Sets the loading flag to false", () => {
      result = reducer(LOADING_STATE, Actions.LoadFail());
      expect(result.isLoading).toBeFalsy();
    });
  });

  describe("SUBMIT", () => {
    it("Sets the loading flag to true", () => {
      result = reducer(MESSAGE_LOADED_STATE, Actions.Submit(NEW_MESSAGE));
      expect(result.isLoading).toBeTruthy();
    });

    it("Does not change the loading flag if it's already true", () => {
      result = reducer(LOADING_STATE, Actions.Submit(NEW_MESSAGE));
      expect(result.isLoading).toBeTruthy();
    });
  });

  describe("SUBMIT_SUCCESS", () => {
    beforeEach(() => {
      result = reducer(LOADING_STATE, Actions.SubmitSuccess(NEW_MESSAGE));
    });

    it("Sets the loading flag to false", () => {
      expect(result.isLoading).toBeFalsy();
    });

    it("Updates the current message", () => {
      expect(result.currentMessage).toBe(NEW_MESSAGE);
    });
  });

  describe("SUBMIT_FAIL", () => {
    beforeEach(() => {
      result = reducer(LOADING_NEW_MESSAGE_STATE, Actions.SubmitFail());
    });

    it("Sets the loading flag to false", () => {
      expect(result.isLoading).toBeFalsy();
    });

    it("Does not modify the current message", () => {
      expect(result.currentMessage).toBe(MESSAGE);
    });
  });

  describe("By default", () => {
    it("Returns the current state", () => {
      result = reducer(INITIAL_STATE, {} as any);
      expect(result).toEqual(INITIAL_STATE);
    });
  });
});