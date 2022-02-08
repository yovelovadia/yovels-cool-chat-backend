const errorHandler = (err, _req, res, _next) => {
  res.status(err.status || 500).json(err);
};

module.exports = errorHandler;
