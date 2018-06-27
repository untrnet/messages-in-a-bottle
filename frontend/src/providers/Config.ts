const devConfig = require("../config/dev.conf.json");
const prodConfig = require("../config/prod.conf.json");

export const getConfig = () => {
  return process.env.NODE_ENV === "production"
  ? prodConfig
  : devConfig;
};