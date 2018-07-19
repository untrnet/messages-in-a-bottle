import { Request, Response, NextFunction } from "express";

/**
 * A regular epxression for email addresses.
 * @private
 */
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

/**
 * A regular expression for phone numbers. Pretty loose - any
 * series of numbers between 9-11 characters will count.
 * @private
 */
const PHONE_NUMBER_REGEX = /[0-9]{9,11}/g;

/**
 * Checks if a message has an email address somewhere within.
 * @param message The message to check.
 * @returns {boolean} true if there is an email address, false otherwise.
 * @private
 */
const hasEmailAddress = (message: string): boolean => EMAIL_REGEX.test(message);

/**
 * Checks if a message has a phone number somewhere within.
 * @param message The message to check.
 * @returns {boolean} true if there is a phone number, false otherwise.
 * @private
 */
const hasPhoneNumber = (message: string): boolean => PHONE_NUMBER_REGEX.test(
  message.split(" ")
    .join()
    .replace(/\,/g, "")
);

/**
 * Checks if there's any personal data within a sent message.
 * @param req The express request object.
 * @param res the express response object.
 * @param next The callback to hand control back to the express app.
 */
export const sanitise = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    hasEmailAddress(req.body.message) || hasPhoneNumber(req.body.message)
      ? res.sendStatus(422)
      : next();
  } catch (error) {
    next();
  }
};
