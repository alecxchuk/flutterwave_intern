// Handles success responses
const sendSuccess = (response, data, code = 200) => {
  return response.status(code).json(data);
};

// Handles error responses
const sendError = (response, message, code) => {
  const resp = {
    Error: message,
  };
  return response.status(code || 400).json(resp);
};

module.exports = { sendSuccess, sendError };
