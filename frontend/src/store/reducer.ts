import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { authReducer } from "./auth/reducer";
import { configReducer } from "./config/reducer";
import { messagesReducer } from "./messages/reducer";
import { uiReducer } from "./ui/reducer";

export default combineReducers({
  auth: authReducer,
  config: configReducer,
  messages: messagesReducer,
  ui: uiReducer,
  form: formReducer
});