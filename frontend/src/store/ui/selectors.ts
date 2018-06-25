import { createSelector } from "reselect";
import { UIState } from "./state";

const uiState = (state: any): UIState => state.ui;

const getModalVisibility = createSelector(
  uiState,
  state => state.isModalVisible
);

export {
  getModalVisibility
};