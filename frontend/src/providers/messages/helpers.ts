import { AxiosRequestConfig } from "axios";

import { store } from "../../store";
import { getConfig } from "../../store/config/selectors";

/**
 * Creates an Axios configuration object. Uses the current configuration
 * within the app's store to determine which URL and endpoint to point
 * Axios to.
 * @param token An authentication token for POST requests to the backend.
 * @returns {AxiosRequestConfig} A configuration object for use with Axios.
 */
export const createConfigObject = (token: string): AxiosRequestConfig => {
  const config = getConfig(store.getState());
  return {
    baseURL: `${config.url}:${config.port}`,
    url: `${config.messagesEndpoint}`,
    headers: {
      "Authorization": token
    }
  };
};
