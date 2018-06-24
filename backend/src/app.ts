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
    private NODE_ENV = process.env.NODE_ENV || "development",
    private PORT     = process.env.PORT || "8080",
  ) {
    this.app = Express();
    this.app.use(bodyparser.json());

    this.setEnvironment(this.NODE_ENV);
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
   * Retrieves the port the server is listening on.
   * @returns {string} The port number.
   */
  public get port(): string {
    return this.PORT;
  }

  /**
   * Retrieves the environment the server is configured for.
   * @returns {string} The environment name.
   */
  public get environment(): string {
    return this.NODE_ENV;
  }

  /**
   * Stops the server process.
   */
  public stop(): void {
    this.server.close();
  }

  /**
   * @private
   * Sets what environment the server is running in.
   * @param env The environment in which the app is running (e.g.
   * production)
   */
  private setEnvironment(env: string): void {
    if (env === "development") {
      // dev specific env dode
    } else {
      // prod-only code
    }
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
  private start(port: string): Server {
    return this.app.listen(port);
  }
}