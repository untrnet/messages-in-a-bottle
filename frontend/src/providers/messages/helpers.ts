import { AxiosRequestConfig } from "axios";

import { store } from "../../store";
import { getConfig } from "../../store/config/selectors";

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
