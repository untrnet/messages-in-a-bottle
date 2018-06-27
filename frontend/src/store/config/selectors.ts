import { createSelector } from "reselect";
import { ConfigState } from "./state";

const configState = (state: any): ConfigState => state.config;

const getConfig = createSelector(
  configState,
  state => state
);

export {
  getConfig
};