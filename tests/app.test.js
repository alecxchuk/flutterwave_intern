const request = require("supertest");
const makeApp = require("../app");
const { testPayload, resProps, splitLessZero } = require("./test_helpers");

const app = makeApp();

describe("/split-payments/compute", () => {
  beforeEach(() => {
    // resets the set function before each test
    // validatePayload.mockReset();
    // validatePayload.mockReturnValue(null);
  });
  describe("When given a payload", () => {
    // should validate the payload.
    // return with a status code of 200
    // should return with a json object containing ...

    test("should respond with a 200 status code", async () => {
      const response = await request(app)
        .post("/split-payments/compute")
        .send(testPayload);
      expect(response.statusCode).toBe(200);
    });

    test("should specify json in the content type header", async () => {
      const response = await request(app)
        .post("/split-payments/compute")
        .send(testPayload);
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    for (let prop of resProps) {
      test(`response has ${prop}`, async () => {
        const response = await request(app)
          .post("/split-payments/compute")
          .send(testPayload);
        expect(response.body[prop]).toBeDefined();
      });
    }
  });

  describe("When given an invalid payload", () => {
    // should validate the payload.
    // return with a status code of 200
    // should return with a json object containing ...

    test("should respond with a 400 status code", async () => {
      let payload = { ...testPayload };
      delete payload["ID"];
      const response = await request(app)
        .post("/split-payments/compute")
        .send(payload);
      expect(response.statusCode).toBe(400);
    });

    test("should respond with a 400 status code", async () => {
      let payload = { ...testPayload };
      delete payload["ID"];
      const response = await request(app)
        .post("/split-payments/compute")
        .send(payload);
      expect(response.statusCode).toBe(400);
    });
    test("should respond with a 400 status code", async () => {
      const response = await request(app)
        .post("/split-payments/compute")
        .send(splitLessZero);
      expect(response.statusCode).toBe(400);
    });
  });
});
