import { MessagesAction, Types } from "./actions";
import { initialState, MessagesState } from "./state";

const beginLoading = (state: MessagesState): MessagesState => ({
  ...state,
  isLoading: true
});

const finishLoading = (state: MessagesState): MessagesState => ({
  ...state,
  isLoading: false
});

export const messagesReducer = (
  state: MessagesState = initialState,
  action: MessagesAction
): MessagesState => {
  switch (action.type) {
    case Types.LOAD:
      return beginLoading(state);

    case Types.LOAD_SUCCESS:
      return finishLoading({ ...state, currentMessage: action.payload });

    case Types.LOAD_FAIL:
      return finishLoading(state);

    case Types.SUBMIT:
      return beginLoading(state);

    case Types.SUBMIT_SUCCESS:
      return finishLoading({ ...state, currentMessage: action.payload });

    case Types.SUBMIT_FAIL:
      return finishLoading(state);

    default:
      return state;
  }
};
