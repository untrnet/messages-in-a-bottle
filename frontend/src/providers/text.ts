import * as text from "../config/enGB.json";

export const getErrorText = (key: string): string => text["errorMessages"][key];
