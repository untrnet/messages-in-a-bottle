import Express from "express";
import bodyparser from "body-parser";
import { Server } from "http";

import { MessagesController } from "./controllers/messages";

/**
 * Represents the "Messages in a Bottle" API in its entirety.
 */
export class App {
  private app: Express.Application;
  private server: Server;

  constructor(
    private PORT = 9002
  ) {
    this.app = Express();
    this.app.use(bodyparser.json());

    this.setRoutes();

    this.server = this.start(this.PORT);
  }

  /**
   * Creates a new instance of the application.
   * @returns {Server} The application's HTTP interface.
   */
  public static create(): Server {
    return new this().server;
  }

  /**
   * Adds the applications routes to the server.
   */
  private setRoutes(): void {
    this.app.use("/messages", MessagesController.create());
  }

  /**
   * Launches the server.
   * @param port The port number the server should listen for requests on.
   * @returns {Server} the configured & launched express server.
   */
  private start(port: number): Server {
    return this.app.listen(port);
  }
}