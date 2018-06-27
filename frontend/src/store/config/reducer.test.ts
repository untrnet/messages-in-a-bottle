import { Actions } from "./actions";
import { configReducer as reducer } from "./reducer";
import { ConfigState } from "./state";

describe("Reducer: Config", () => {
  const CONFIG_OBJECT = {
    "API_URL": "http://secretapilocation.dev",
    "API_PORT": "8080",
    "API_ENDPOINT": "messages"
  };

  const DEV_CONFIG_OBJECT = {
    "API_URL": "http://localhost",
    "API_PORT": "4200",
    "API_ENDPOINT": "messages"
  };

  const INITIAL_STATE: ConfigState = {
    url: "",
    messagesEndpoint: "",
    port: ""
  };

  const LOADED_STATE: ConfigState = {
    url: CONFIG_OBJECT.API_URL,
    messagesEndpoint: CONFIG_OBJECT.API_ENDPOINT,
    port: CONFIG_OBJECT.API_PORT
  };

  let result: ConfigState;

  describe("LOAD", () => {
    it("Adds the passed in config object to the state", () => {
      result = reducer(INITIAL_STATE, Actions.Load(CONFIG_OBJECT));
      expect(result).toEqual(LOADED_STATE);
    });

    it("Replaces pre-existing configuration", () => {
      result = reducer(LOADED_STATE, Actions.Load(DEV_CONFIG_OBJECT));
      expect(result).toEqual({
        url: DEV_CONFIG_OBJECT.API_URL,
        messagesEndpoint: DEV_CONFIG_OBJECT.API_ENDPOINT,
        port: DEV_CONFIG_OBJECT.API_PORT
      });
    });
  });

  describe("By default", () => {
    it("Does not modify the current state", () => {
      result = reducer(LOADED_STATE, {} as any);
      expect(result).toEqual(LOADED_STATE);
    });
  });
});