import { createSelector } from "reselect";
import { MessagesState } from "./state";

const messagesState = (state: any): MessagesState => state.messages;

const getCurrentMessage = createSelector(
  messagesState,
  state => state.currentMessage ? state.currentMessage : undefined
);

export {
  getCurrentMessage
};
