import * as selectors from "./selectors";
import { ConfigState } from "./state";

describe("Selectors: Config", () => {
  const CONFIG_OBJECT = {
    "API_URL": "http://secretapilocation.dev",
    "API_PORT": "8080",
    "API_ENDPOINT": "messages"
  };

  const LOADED_CONFIG: ConfigState = {
    url: CONFIG_OBJECT.API_URL,
    messagesEndpoint: CONFIG_OBJECT.API_ENDPOINT,
    port: CONFIG_OBJECT.API_PORT
  };

  const STATE = {
    config: LOADED_CONFIG
  };

  describe("#getConfig", () => {
    it("Returns the current config in the state", () => {
      expect(selectors.getConfig(STATE)).toEqual(LOADED_CONFIG);
    });
  });
});