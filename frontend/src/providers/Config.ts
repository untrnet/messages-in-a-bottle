import * as devConfig from "../config/dev.conf.json";
import * as prodConfig from "../config/prod.conf.json";

/**
 * Retrieves the application configuration variables
 * from the config folder.
 * @returns {object} Production config variables if the app is in production,
 * development config otherwise.
 */
export const getConfig = () => {
  return process.env.NODE_ENV === "production"
    ? prodConfig
    : devConfig;
};