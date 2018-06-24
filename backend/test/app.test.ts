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

    describe("/messages", () => {
      describe("GET", () => {
        beforeEach(async () => {
          res = await request(instance).get("/messages");
        });

        it("Returns a 200 OK status code", () => {
          expect(res.status).toBe(200);
        });

        it("Returns hello world", () => {
          expect(res.body.message).toBe("hello world");
        });
      });

      describe("POST", () => {
        describe("With a valid message", () => {
          beforeEach(async () => {
            res = await request(instance)
              .post("/messages")
              .set("Accept", "application/json")
              .send({ message: "hello I am a test message"});
          });

          it("Returns a 201 created status code", () => {
            expect(res.status).toBe(201);
          });

          it("Updates the current message", async () => {
            res = await request(instance).get("/messages");
            expect(res.body.message).toBe("hello I am a test message");
          });
        });

        describe("With an invalid message", () => {
          beforeEach(async () => {
            res = await request(instance)
              .post("/messages")
              .set("Accept", "application/json")
              .send({ hahaha: "really stupid wrong data structure"});
          });

          it("Returns a 400 bad request status code", () => {
            expect(res.status).toBe(400);
          });

          it("Does not update the current message", async () => {
            res = await request(instance).get("/messages");
            expect(res.body.message).toBe("hello world");
          });
        });
      });
    });
  });
});