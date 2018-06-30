import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { MessageResponse } from "./interfaces";

/**
 * Represents the Messages provider, which handles the HTTP requests
 * for sending & receiving new messages from the backend. By default,
 * the provider uses Axios to perform the HTTP requests.
 */
export class MessagesService {
  private url: string;

  /**
   * @param {AxiosRequestConfig} config A configuration object used by Axios.
   * @param {AxiosInstance} http The service which performs the HTTP requests. Defaults
   * to an instance of Axios.
   */
  constructor(
    private config: AxiosRequestConfig,
    private http: AxiosInstance = axios.create(config)
  ) {
    this.url = `${this.config.baseURL}/${this.config.url}`;
  }

  /**
   * Gets the URL the messages provider is currently pointed to send &
   * receive data from.
   * @returns {string} The current URL.
   */
  public get URL(): string {
    return this.url.slice(0, this.url.length);
  }

  /**
   * Gets the current message from the backend.
   * @returns {Promise<MessageResponse>} The current message.
   */
  public getCurrentMessage(): Promise<MessageResponse> {
    return this.http.get(this.url, { headers: "" })
      .then(res => res.data);
  }

  /**
   * Sends a new message to the backend.
   * @param newMessage A new message, which will overwrite the current message
   * on the backend.
   * @returns {Promise<number>} A HTTP status code to determine if the request was
   * successful or not.
   */
  public postNewMessage(newMessage: string): Promise<number> {
    return this.http.post(this.url, { message: newMessage })
      .then(res => res.status);
  }
}