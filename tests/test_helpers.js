exports.testPayload = {
  ID: 13082,
  Amount: 4500,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [
    {
      SplitType: "FLAT",
      SplitValue: 450,
      SplitEntityId: "LNPYACC0019",
    },
    {
      SplitType: "FLAT",
      SplitValue: 2300,
      SplitEntityId: "LNPYACC0011",
    },
  ],
};
exports.nonZeroBalanceCheck = {
  ID: 13082,
  Amount: 4500,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [
    {
      SplitType: "FLAT",
      SplitValue: 450,
      SplitEntityId: "LNPYACC0019",
    },
    {
      SplitType: "FLAT",
      SplitValue: 4500,
      SplitEntityId: "LNPYACC0011",
    },
  ],
};
exports.splitGreaterAmount = {
  ID: 13082,
  Amount: 4500,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [
    {
      SplitType: "FLAT",
      SplitValue: 450,
      SplitEntityId: "LNPYACC0019",
    },
    {
      SplitType: "FLAT",
      SplitValue: 5000,
      SplitEntityId: "LNPYACC0011",
    },
  ],
};
exports.splitLessZero = {
  ID: 13082,
  Amount: 4500,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [
    {
      SplitType: "FLAT",
      SplitValue: 450,
      SplitEntityId: "LNPYACC0019",
    },
    {
      SplitType: "FLAT",
      SplitValue: -1,
      SplitEntityId: "LNPYACC0011",
    },
  ],
};
exports.totalSplitMoreThanAmount = {
  ID: 13082,
  Amount: 4500,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [
    {
      SplitType: "FLAT",
      SplitValue: 450,
      SplitEntityId: "LNPYACC0019",
    },
    {
      SplitType: "FLAT",
      SplitValue: 2000,
      SplitEntityId: "LNPYACC0011",
    },
    {
      SplitType: "FLAT",
      SplitValue: 60,
      SplitEntityId: "LNPYACC0011",
    },
    {
      SplitType: "FLAT",
      SplitValue: 2000,
      SplitEntityId: "LNPYACC0011",
    },
  ],
};

exports.faultySplitType = {
  ID: 1308,
  Amount: 12580,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [
    {
      SplitType: "FLATS",
      SplitValue: 45,
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
  ],
};
exports.tooMuchSplitType = {
  ID: 1308,
  Amount: 12580,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [
    {
      SplitType: "FLATS",
      SplitValue: 45,
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
      SplitType: "FLATS",
      SplitValue: 45,
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
      SplitType: "FLATS",
      SplitValue: 45,
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
      SplitType: "FLATS",
      SplitValue: 45,
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
      SplitType: "FLATS",
      SplitValue: 45,
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
      SplitType: "FLATS",
      SplitValue: 45,
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
      SplitType: "FLATS",
      SplitValue: 45,
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
  ],
};
exports.noSplitInfo = {
  ID: 1308,
  Amount: 12580,
  Currency: "NGN",
  CustomerEmail: "anon8@customers.io",
  SplitInfo: [],
};

exports.payloadProps = [
  "ID",
  "Amount",
  "Currency",
  "CustomerEmail",
  "SplitInfo",
];

exports.splitProps = ["SplitType", "SplitValue", "SplitEntityId"];
exports.sampleResponse = {
  ID: 1308,
  Balance: 0,
  SplitBreakdown: [
    {
      SplitEntityId: "LNPYACC0019",
      Amount: 5000,
    },
    {
      SplitEntityId: "LNPYACC0011",
      Amount: 2000,
    },
    {
      SplitEntityId: "LNPYACC0015",
      Amount: 2000,
    },
  ],
};

exports.nonZeroResponse = {
  Balance: 0,
  ID: 13082,
  SplitBreakdown: [
    { Amount: 450, SplitEntityId: "LNPYACC0019" },
    { Amount: 5000, SplitEntityId: "LNPYACC0011" },
  ],
};
exports.resProps = ["ID", "Balance", "SplitBreakdown"];
