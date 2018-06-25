import { Request, Response, NextFunction } from "express";
import { isEqual } from "lodash";
import { Token } from "../interfaces/token";

/**
 * Previously used tokens, which are now considered invalid.
 * @private
 */
const usedTokens: Token[] = [];

/**
 * The delimiter character used within the authorisation header.
 * @private
 */
const DELIMITER = "+";

/**
 * Resets the list of expired (previously used) authorisation tokens.
 */
export const clearTokens = (): Token[] => usedTokens.splice(0, usedTokens.length);

/**
 * Transforms a HTTP authorisation header into a Token object.
 * @param authorisation The authorisation header sent by a HTTP request
 * @returns {Token} The transformed header.
 * @private
 */
const createToken = (authorisation: string): Token => {
  const [fingerprint, timestamp] = authorisation.split(DELIMITER);
  return {
    fingerprint: fingerprint,
    timestamp: timestamp
  };
};

/**
 * Checks if a token has already been used.
 * @param token The token to check.
 * @returns {boolean} true if the token has already been used, false otherwise.
 * @private
 */
const hasTokenBeenUsed = (token: Token): boolean => (
  !!usedTokens.find(usedToken => isEqual(usedToken, token))
);

/**
 * Authorises a valid token.
 * @param token The valid token.
 * @param next The function to hand control of the request
 * back to the controller.
 * @private
 */
const acceptToken = (token: Token, next: NextFunction): void => {
  usedTokens.push(token);
  next();
};

/**
 * Checks if a request is valid by checking its authorisation header.
 * @param req The express request object.
 * @param res The express response object.
 * @param next The callback to hand control back to the express app.
 */
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (req.headers.authorization) {
    const token = createToken(req.headers.authorization);
    hasTokenBeenUsed(token) ? res.sendStatus(401) : acceptToken(token, next);
  } else {
    res.sendStatus(401);
  }
};
