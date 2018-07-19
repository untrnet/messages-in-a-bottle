import { Request, Response, NextFunction } from "express";

/**
 * The maximum allowed length of a message.
 * @private
 */
const MAXIMUM_LENGTH = 140;

/**
 * Rejects a message if it is too long.
 * @param req The express request object.
 * @param res the express response object.
 * @param next The callback to hand control back to the express app.
 */
export const verifyLength = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    req.body.message.length > MAXIMUM_LENGTH ? res.sendStatus(422) : next();
  } catch (error) {
    next();
  }
};