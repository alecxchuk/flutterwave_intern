const {
  invalidTransactionObject,
  missingTransactionProp,
  invalidSplitInfoProp,
} = require("../utils/response_messages");
const validatePayload = require("../validators/validators");
const {
  testPayload,
  payloadProps,
  splitProps,
  tooMuchSplitType,
} = require("./test_helpers");

describe("When given an invalid payload", () => {
  test("should return error message when given a string as payload", () => {
    expect(validatePayload("")).toBe(invalidTransactionObject);
  });
  test("should return error message when given empty payload object", () => {
    expect(validatePayload({})).toBe(invalidTransactionObject);
  });
  test("should return error message when given a number as payload object", () => {
    expect(validatePayload(123)).toBe(invalidTransactionObject);
  });
  for (let prop of payloadProps) {
    let payload = { ...testPayload };
    delete payload[prop];
    test(`should return error message when the payload does not have a ${prop} property`, () => {
      expect(validatePayload(payload)).toBe(missingTransactionProp(prop));
    });
  }

  describe("When given an invalid SplitInto property", () => {
    // deep copy of testPayload
    let payload = JSON.parse(JSON.stringify(testPayload));

    for (let prop of splitProps) {
      payload.SplitInfo = payload["SplitInfo"].map((item) => {
        delete item[prop];
        return item;
      });
      test(`should return error message when ${prop} in the split info is missing`, () => {
        expect(validatePayload(payload)).toBe(invalidSplitInfoProp);
      });
    }

    payload.SplitInfo = [];
    test("should return error message when the split info is an empty array", () => {
      expect(validatePayload(payload)).toBe(invalidSplitInfoProp);
    });
    payload.SplitInfo = {};
    test("should return error message when the split info is of invalid type", () => {
      expect(validatePayload(payload)).toBe(invalidSplitInfoProp);
    });
    console.log(tooMuchSplitType["SplitInfo"].length);
    test("return error if SplitInfo contains less than 1 or more than 20 entries", () => {
      expect(validatePayload(tooMuchSplitType)).toBe(invalidSplitInfoProp);
    });
  });
});

describe("When given a valid payload", () => {
  test("should return true when given a valid payload", () => {
    expect(validatePayload(testPayload)).toBe(null);
  });
});
