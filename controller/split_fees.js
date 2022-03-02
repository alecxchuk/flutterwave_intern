const validatePayload = require("../validators/validators");

exports.split_payments = function () {
  return (req, res) => {
    const payload = req.body;

    // Validate payload
    let payloadError = validatePayload(payload);

    // Throw error the payload validation returns an error
    if (payloadError !== null) {
      throw new Error(payloadError);
    }
  };
};
