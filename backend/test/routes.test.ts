import request from "supertest";
import { Server } from "http";

import { App } from "../src/app";
import { clearTokens } from "../src/middleware/auth";
import * as helpers from "./helpers";

describe("Routes", () => {
  const MESSAGES = {
    default: "hello world",
    valid: "valid test message",
    invalid: "very wrong test message",
    valid2: "another valid test message",
    invalid_email: "hello@test.com",
    invalid_phone_number: "call me at 0800 123 1234 bbz xx ;)"
  };

  let instance: Server;
  let res: request.Response;

  beforeEach(() => {
    instance = App.create();
  });

  afterEach(() => {
    instance.close();
    clearTokens();
  });

  describe("/", () => {
    describe("GET", () => {
      it("returns a 404 error", async () => {
        res = await helpers.GET("/", instance);
        expect(res.status).toBe(404);
      });
    });
  });

  describe("/messages", () => {
    describe("GET", () => {
      beforeEach(async () => {
        res = await helpers.GET("/messages", instance);
      });

      it("Returns a 200 OK status code", () => {
        expect(res.status).toBe(200);
      });

      it("Returns hello world", () => {
        expect(res.body.message).toBe(MESSAGES.default);
      });
    });

    describe("POST", () => {
      describe("With a valid message", () => {
        beforeEach(async () => {
          res = await helpers.validPOST(MESSAGES.valid, instance);
        });

        it("Returns a 201 created status code", () => {
          expect(res.status).toBe(201);
        });

        it("Updates the current message", async () => {
          res = await helpers.GET("/messages", instance);
          expect(res.body.message).toBe(MESSAGES.valid);
        });
      });

      describe("With an invalid message", () => {
        beforeEach(async () => {
          res = await helpers.invalidDataPOST(MESSAGES.invalid, instance);
        });

        it("Returns a 400 bad request status code", () => {
          expect(res.status).toBe(400);
        });

        it("Does not update the current message", async () => {
          res = await helpers.GET("/messages", instance);
          expect(res.body.message).toBe(MESSAGES.default);
        });
      });

      describe("Without proper Authorization", () => {
        beforeEach(async () => {
            res = await helpers.invalidAuthPOST(MESSAGES.valid, instance);
        });

        it("Returns a 403 unauthorized status code", () => {
          expect(res.status).toBe(401);
        });

        it("Does not update the current message", async () => {
          res = await helpers.GET("/messages", instance);
          expect(res.body.message).toBe(MESSAGES.default);
        });
      });

      describe("Attempting to re-use an invalid token", () => {
        beforeEach(async () => {
          await helpers.validPOST(MESSAGES.valid, instance);
          res = await helpers.validPOST(MESSAGES.valid2, instance);
        });

        it("Returns a 403 status code", () => {
          expect(res.status).toBe(401);
        });

        it("Does not update the current message", async () => {
          res = await helpers.GET("/messages", instance);
          expect(res.body.message).toBe(MESSAGES.valid);
        });
      });

      describe("Posting personal information", () => {
        it("Returns a 422 when trying to post an email address within a message", async () => {
          res = await helpers.validPOST(MESSAGES.invalid_email, instance);
          expect(res.status).toBe(422);
        });

        it("Returns a 422 when trying to post a phone number within a message", async () => {
          res = await helpers.validPOST(MESSAGES.invalid_phone_number, instance);
          expect(res.status).toBe(422);
        });
      });
    });
  });
});