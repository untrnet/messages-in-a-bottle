import { ModalProps } from "../components/Modal";
import * as text from "../config/enGB.json";

/**
 * Gets error text from the localisation config file.
 * @param key The error message key to search by.
 * @returns {string} The localised error message text.
 */
export const getErrorText = (key: string): string => text["errorMessages"][key];

/**
 * Gets the content for the "Welcome" modal from the localisation config
 * file.
 * @returns {ModalProps} The localised modal text, structured as props for
 * easy use within the Modal component.
 */
export const getModaltext = (): ModalProps => text["modal"];
