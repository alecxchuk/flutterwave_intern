require("dotenv").config();

// express
const express = require("express");
// database helper
const morgan = require("morgan");
const { sendError, sendSuccess } = require("./utils/response_handler");
const splitComputation = require("./validators/split");

module.exports = function () {
  const app = express();
  app.use(express.json());
  app.use(morgan("dev"));

  // cors
  const cors = require("cors");
  const validatePayload = require("./validators/validators");
  app.use(cors());

  const NodeCache = require("node-cache");
  const myCache = new NodeCache();

  app.post("/split-payments/compute", (req, res) => {
    const payload = req.body;

    const id = payload["ID"];
    let data = myCache.get(id);
    if (data) {
      console.log("Retrieved value from cache !!");

      // Serve response from cache using
      // myCache.get(key)
      sendSuccess(res, data);
    } else {
      // Validate payload
      let payloadError = validatePayload(payload);

      // Throw error the payload validation returns an error
      if (payloadError !== null) {
        // throw new Error(payloadError);
        return sendError(res, payloadError, 400);
      }

      // Calculates split computation
      // returns a response object if successful
      // returns an error
      const computation = splitComputation(payload);

      // if the return type of the computation value is string
      // There was an error. Throw error
      if (typeof computation === "string") {
        // throw new Error(computation);
        return sendError(res, computation, 400);
      }

      // res.send({
      //   ID: 0,
      //   Balance: "",
      //   SplitBreakdown: "",
      // });
      myCache.set(id, computation, 10000);
      return sendSuccess(res, computation);
    }
  });

  return app;
};
