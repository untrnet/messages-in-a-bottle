import { Action } from "redux";

export enum Types {
  SHOW_MODAL = "[UI] Show Modal",
  HIDE_MODAL = "[UI] Hide Modal"
}

interface ShowModal extends Action {
  type: Types.SHOW_MODAL;
}

interface HideModal extends Action {
  type: Types.HIDE_MODAL;
}

const showModal = (): ShowModal => ({
  type: Types.SHOW_MODAL
});

const hideModal = (): HideModal => ({
  type: Types.HIDE_MODAL
});

export const Actions = {
  Show: showModal,
  Hide: hideModal
};

export type UIAction = ShowModal
  | HideModal;