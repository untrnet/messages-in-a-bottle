import { ConfigAction, Types } from "./actions";
import { ConfigState, initialState } from "./state";

const updateConfig = (config: object, state: ConfigState): ConfigState => ({
  ...state,
  messagesEndpoint: config["API_ENDPOINT"],
  port: config["API_PORT"],
  url: config["API_URL"]
});

export const configReducer = (
  state: ConfigState = initialState,
  action: ConfigAction
): ConfigState => {
  switch (action.type) {
    case Types.LOAD:
      return updateConfig(action.payload, state);

    default:
      return state;
  }
};
