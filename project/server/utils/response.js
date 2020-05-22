class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const handleSuccess = (statusCode, data = null, res) => {
  res.status(statusCode).json({
    statusCode,
    data,
  });
};

const handleError = (err, res) => {
  const { statusCode, message } = err;
  res.status(statusCode || 500).json({
    status: 'error',
    statusCode: statusCode || 500,
    message: message || 'Internal server error',
  });
};

module.exports = {
  ErrorHandler,
  handleSuccess,
  handleError,
};
