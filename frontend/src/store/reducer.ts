import { combineReducers } from "redux";

import { authReducer as auth } from "./auth/reducer";
import { messagesReducer as messages } from "./messages/reducer";
import { uiReducer as ui } from "./ui/reducer";

export default combineReducers({
  auth,
  messages,
  ui
});