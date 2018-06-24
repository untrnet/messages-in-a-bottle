import request from "supertest";
import { Server } from "http";

import { App } from "../src/app";

describe("App", () => {
  let instance: Server;
  let app: App;
  let res: request.Response;

  describe("Initialisation", () => {
    describe("Default configuration", () => {
      beforeEach(() => {
        process.env = {};
        app = new App();
      });

      afterEach(() => {
        app.stop();
      });

      it("Listens on port 8080", () => {
        expect(app.port).toBe("8080");
      });

      it("Is set to development environment", () => {
        expect(app.environment).toBe("development");
      });
    });

    describe("Custom configuration", () => {
      beforeEach(() => {
        process.env = {
          NODE_ENV: "test",
          PORT: "3000"
        };

        app = new App();
      });

      afterEach(() => {
        app.stop();
      });

      it("Listens on the specified port", () => {
        expect(app.port).toBe(process.env.PORT);
      });

      it("Is set to the specified environment", () => {
        expect(app.environment).toBe(process.env.NODE_ENV);
      });
    });
  });

  describe("Routes", () => {
    beforeEach(() => {
      instance = App.create();
    });

    afterEach(() => {
      instance.close();
    });

    describe("/", () => {
      describe("GET", () => {
        it("returns a 404 error", async () => {
          res = await request(instance).get("/");
          expect(res.status).toBe(404);
        });
      });
    });
  });
});