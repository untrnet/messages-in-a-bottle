import { combineReducers } from "redux";

import { authReducer as auth } from "./auth/reducer";
import { configReducer as config } from "./config/reducer";
import { messagesReducer as messages } from "./messages/reducer";
import { uiReducer as ui } from "./ui/reducer";

export default combineReducers({
  auth,
  config,
  messages,
  ui
});