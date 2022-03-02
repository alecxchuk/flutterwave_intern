const { payloadProps, splitProps } = require("../tests/test_helpers");
const {
  invalidTransactionObject,
  missingTransactionProp,
  invalidSplitInfoProp,
} = require("../utils/response_messages");

// This function validates the transaction payload
// returns null if the payload is valid
function validatePayload(payload) {
  const isNotValidObject = !isObject(payload); // typeof payload === "object" && payload !== null;
  const isEmpty = Object.entries(payload).length === 0;
  // Checking if paylod is an object which is not empty
  // returns false
  if (isNotValidObject || isEmpty) {
    return invalidTransactionObject;
  }
  // Checking if any of the required properties is missing
  for (let prop of payloadProps) {
    if (!payload.hasOwnProperty(prop)) {
      return missingTransactionProp(prop);
    }
    // checking if
    if (prop === "SplitInfo") {
      let splitInfos = payload[prop];
      // Return error if
      // SplitInfo contains a value that is not an array or
      // SplitInfo contains an empty array
      if (
        !Array.isArray(splitInfos) ||
        splitInfos.length === 0 ||
        splitInfos.length > 20
      ) {
        return invalidSplitInfoProp;
      }
      for (let splitInfo of splitInfos) {
        for (let splitProp of splitProps) {
          // return error if either SplitType,SplitValue or SplitEntityId is missing
          if (!splitInfo.hasOwnProperty(splitProp)) {
            return invalidSplitInfoProp;
          }
        }
      }
    }
  }
  // returns null when there is no error
  return null;
}

function isObject(objValue) {
  return (
    objValue && typeof objValue === "object" && objValue.constructor === Object
  );
}

module.exports = validatePayload;
