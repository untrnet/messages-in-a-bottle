import * as devConfig from "../config/dev.conf.json";
import * as prodConfig from "../config/prod.conf.json";
import { getConfig } from "./Config";

describe("Provider: Config", () => {
  const DEV_CONFIG = devConfig;
  const PROD_CONFIG = prodConfig;

  describe("#getConfig", () => {
    describe("In production", () => {
      it("Gets the production config file", () => {
        process.env.NODE_ENV = "production";
        expect(getConfig()).toEqual(PROD_CONFIG);
      });
    });

    describe("In development", () => {
      it("Gets the development config file", () => {
        process.env.NODE_ENV = "development";
        expect(getConfig()).toEqual(DEV_CONFIG);
      });
    });

    describe("In other environments", () => {
      it("Gets the development config file", () => {
        process.env.NODE_ENV = "hello friends";
        expect(getConfig()).toEqual(DEV_CONFIG);
      });
    });
  });
});