import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

import { MessageResponse } from "./interfaces";

export class MessagesService {

  private url: string;

  constructor(
    private config: AxiosRequestConfig,
    private http: AxiosInstance        = axios.create(config)
  ) {
    this.url = `${this.config.baseURL}/${this.config.url}`;
  }

  public get URL(): string {
    return this.url.slice(0, this.url.length);
  }

  public getCurrentMessage(): Promise<MessageResponse> {
    return this.http.get(this.url)
      .then(res => res.data);
  }

  public postNewMessage(newMessage: string): Promise<number> {
    return this.http.post(this.url, { message: newMessage })
      .then(res => res.status);
  }
}