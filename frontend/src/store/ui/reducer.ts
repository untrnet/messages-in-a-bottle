import { Types, UIAction } from "./actions";
import { initialState, UIState} from "./state";

export const uiReducer = (state: UIState = initialState, action: UIAction): UIState => {
  switch (action.type) {
    case Types.SHOW_MODAL:
      return { ...state, isModalVisible: true };

    case Types.HIDE_MODAL:
      return { ...state, isModalVisible: false };

    default:
      return state;
  }
};