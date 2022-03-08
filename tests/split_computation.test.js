const {
  zeroBalanceError,
  greaterSplitError,
  splitLessThanZeroError,
} = require("../utils/response_messages");
const splitComputation = require("../validators/split");
const {
  faultySplitType,
  nonZeroBalanceCheck,
  splitGreaterAmount,
  splitLessZero,
} = require("./test_helpers");

describe("split-computation", () => {
  describe("When giving a valid payload", () => {
    test("should give right response", () => {
      expect(
        splitComputation({
          ID: 13092,
          Amount: "4500",
          Currency: "NGN",
          CustomerEmail: "anon8@customers.io",
          SplitInfo: [
            {
              SplitType: "FLAT",
              SplitValue: 450,
              SplitEntityId: "LNPYACC0019",
            },
            {
              SplitType: "RATIO",
              SplitValue: 3,
              SplitEntityId: "LNPYACC0011",
            },
            {
              SplitType: "PERCENTAGE",
              SplitValue: 3,
              SplitEntityId: "LNPYACC0015",
            },
            {
              SplitType: "RATIO",
              SplitValue: 2,
              SplitEntityId: "LNPYACC0016",
            },
            {
              SplitType: "FLAT",
              SplitValue: 2450,
              SplitEntityId: "LNPYACC0029",
            },
            {
              SplitType: "PERCENTAGE",
              SplitValue: 10,
              SplitEntityId: "LNPYACC0215",
            },
          ],
        })
      ).toStrictEqual({
        ID: 13092,
        Balance: 0,
        SplitBreakdown: [
          {
            SplitEntityId: "LNPYACC0019",
            Amount: 450,
          },
          {
            SplitEntityId: "LNPYACC0029",
            Amount: 2450,
          },
          {
            SplitEntityId: "LNPYACC0015",
            Amount: 48,
          },
          {
            SplitEntityId: "LNPYACC0215",
            Amount: 155.20000000000002,
          },
          {
            SplitEntityId: "LNPYACC0011",
            Amount: 838.0799999999999,
          },
          {
            SplitEntityId: "LNPYACC0016",
            Amount: 558.72,
          },
        ],
      });
    });
  });
  describe("When giving a invalid payload", () => {
    test("return error if splitType is not recognize", () => {
      expect(splitComputation(faultySplitType)).toBe("error");
    });
    test("final Balance cannot be less than zero", () => {
      expect(splitComputation(nonZeroBalanceCheck)).toBe(zeroBalanceError);
    });
    test("return error if amount computed for each entity is greater than transaction amount", () => {
      expect(splitComputation(splitGreaterAmount)).toBe(greaterSplitError);
    });
    test("return error if split amount computed is less than zero", () => {
      expect(splitComputation(splitLessZero)).toBe(splitLessThanZeroError);
    });

  });
});
