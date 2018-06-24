import { App } from "../src/app";

describe("App", () => {
  let app: App;

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
});