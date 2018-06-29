import * as devConfig from "../config/dev.conf.json";
import * as prodConfig from "../config/prod.conf.json";

export const getConfig = () => {
  return process.env.NODE_ENV === "production"
    ? prodConfig
    : devConfig;
};