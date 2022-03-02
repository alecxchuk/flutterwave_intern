exports.invalidTransactionObject = "Invalid Transaction Payload";
exports.missingTransactionProp = (prop) =>
  `Transaction payload does not have an ${prop} property`;
exports.invalidSplitInfoProp = `Invalid SplitInfo Value`;
exports.zeroBalanceError = `Invalid Transaction balance cannot be less than zero`;
exports.greaterSplitError = `Invalid Transaction: split value amount cannot be greater than transaction amount`;
exports.splitLessThanZeroError = `Invalid Transaction: split value amount cannot be less than zero`;
exports.totalSplitMoreThanAmountError = `Invalid Transaction: Total split value amount cannot be greater than transaction amount`;
