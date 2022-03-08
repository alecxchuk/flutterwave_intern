const { sampleResponse } = require("../tests/test_helpers");
const {
  zeroBalanceError,
  greaterSplitError,
  splitLessThanZeroError,
  totalSplitMoreThanAmountError,
} = require("../utils/response_messages");

function splitComputation(payload) {
  let transactionAmount = (balance = parseFloat(payload["Amount"]));
  //   Transcation id
  const id = payload["ID"];

  // Array containing the split breakdowns
  let splitBreakdowns = [];
  // gets the split info from payload object
  const splitInfo = payload["SplitInfo"];

  // Sorts the split information in the order FLAT -> PERCENTAGE -> RATIO
  const sorted = splitInfo.sort((a, b) => {
    var nameA = a.SplitType.toUpperCase(); // ignore upper and lowercase
    var nameB = b.SplitType.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1; //nameA comes first
    }
    if (nameA > nameB) {
      return 1; // nameB comes first
    }
    return 0; // names must be equal
  });

  // Stores
  let types = [];
  // total ratio SplitValue
  let totalRatio = 0;

  //
  for (let prop of sorted) {
    if (prop["SplitType"] === "RATIO") {
      totalRatio += prop["SplitValue"];
    }
    types.push(prop["SplitType"]);
  }
  //   types.sort();

  // sets whether the ration balance has been set
  let hasSetRatio = false;
  // The balance for the ratio calculations
  let ratioBalance = 0;

  // Holds the sum of computed split amounts
  let deductablesSum = 0;
  //
  for (const [index, info] of types.entries()) {
    // retrieve the splitValue, splitEntityId and splitType
    const splitValue = sorted[index]["SplitValue"];
    const splitEntityId = sorted[index]["SplitEntityId"];
    const splitType = sorted[index]["SplitType"];

    // holds the deducted value for the split
    let deductable = 0;

    // split Type is FLAT
    if (splitType === "FLAT") {
      deductable = splitValue;
      //   balance -= splitValue;
      //   split Type is PERCENTAGE
    } else if (splitType === "PERCENTAGE") {
      // calculate the percentage
      const perc = calcPercent(balance, splitValue);
      deductable = perc;
      // deduct the percentage from balance
      //   balance -= perc;
      // split type is RATIO
    } else if (splitType === "RATIO") {
      // if the ratio balance has not been set before
      // set the ratio balance
      // set hasSetRatio to true
      if (hasSetRatio === false) {
        ratioBalance = balance;
        hasSetRatio = true;
      }
      // Calculate the ratio given the ratioBalance, split value and total ratio
      const ratio = calcRatio(ratioBalance, splitValue, totalRatio);
      deductable = ratio;
      //   balance -= ratio;
    } else {
      return "error";
    }

    // return error if computed split amount is greater than transactional amount
    if (deductable > transactionAmount) {
      return greaterSplitError;
    }
    // return error if computed split amount is less than zero
    if (deductable < 0) {
      return splitLessThanZeroError;
    }
    // add to deductable sum
    deductablesSum += deductable;
    balance -= deductable;
    // Object that holds each split breakdown
    const splitBreakdown = {
      SplitEntityId: splitEntityId,
      Amount: deductable,
    };

    // add to the splitBreakdowns array
    splitBreakdowns.push(splitBreakdown);
  }
  //   Ensure balance cannot be less than zero
  if (balance < 0) {
    return zeroBalanceError;
  }

  if (deductablesSum > transactionAmount) {
    return totalSplitMoreThanAmountError;
  }
  // response object
  const response = {
    ID: id,
    Balance: balance,
    SplitBreakdown: splitBreakdowns,
  };

  return response;
}

// calculate the percentage of a number
// parameters: the number and the percentage
function calcPercent(num, percentage) {
  return num * (percentage / 100);
}
// calculate the ratio of a number
// parameters: the number, ratio, total
function calcRatio(num, ratio, total) {
  return (ratio / total) * num;
}

// Rounds to 2 decimal places
// parameter: the number to be rounded
function round(num) {
  var m = Number((Math.abs(num) * 100).toPrecision(15));
  return (Math.round(m) / 100) * Math.sign(num);
}

module.exports = splitComputation;
