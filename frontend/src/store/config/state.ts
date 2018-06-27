export interface ConfigState {
  url: string;
  port: string;
  messagesEndpoint: string;
}

export const initialState: ConfigState = {
  url: "",
  port: "",
  messagesEndpoint: ""
};
