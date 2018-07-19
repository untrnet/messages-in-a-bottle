import Express, { Router, Request, Response } from "express";
import cors from "cors";

import { authenticate } from "../middleware/auth";
import { sanitise } from "../middleware/sanitsation";

/**
 * Represents the Messages controller with its associated routes.
 */
export class MessagesController {
  private message: string;

  constructor(
    private router: Router = Express.Router()
  ) {
    this.message = "hello world";

    this.enableCors();
    this.initialiseRoutes();
  }

  /**
   * Creates a new instance of the controller.
   * @returns {Router} a configured router for the controller.
   */
  public static create(): Router {
    return new this().router;
  }

  /**
   * Initialises the routes used by the controller.
   */
  private initialiseRoutes(): void {
    this.messagesIndex();
    this.messagesCreate();
  }

  /**
   * Enables cross-origin resource sharing (CORS) for the messages routes.
   */
  private enableCors(): void {
    this.router.use(cors());
  }

  /**
   * The GET route for the messages controller. Sends the most recently
   * posted message as a response.
   */
  private messagesIndex(): void {
    this.router.get("/", (req: Request, res: Response) => {
      res.json({
        message: this.message
      });
    });
  }

  /**
   * The POST route for the messages controller. Updates the current message
   * on a successful request.
   */
  private messagesCreate(): void {
    this.router.use(authenticate);
    this.router.use(sanitise);
    this.router.post("/", (req: Request, res: Response) => {
      if (req.body.message) {
        this.message = req.body.message;
        res.sendStatus(201);
      } else {
        res.sendStatus(400);
      }
    });
  }
}