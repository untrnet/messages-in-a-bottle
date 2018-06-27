import { Action } from "redux";

export enum Types {
  LOAD = "[Configuration] Load"
}

interface Load extends Action {
  type: Types.LOAD;
  payload: object;
}

const loadConfig = (config: object): Load => ({
  type: Types.LOAD,
  payload: config
});

export const Actions = {
  Load: loadConfig
};

export type ConfigAction = Load;