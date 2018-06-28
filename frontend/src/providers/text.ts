import { ModalProps } from "../components/Modal";
import * as text from "../config/enGB.json";

export const getErrorText = (key: string): string => text["errorMessages"][key];
export const getModaltext = (): ModalProps => text["modal"];
