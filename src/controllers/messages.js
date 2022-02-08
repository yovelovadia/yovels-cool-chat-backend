const { database } = require("../database");

const addNewMessage = async (req, res, next) => {
  const { message } = req.body;

  database.addNewMessage(message, ({ error }) => {
    if (error) return next(error);

    res.status(200).json({ success: true });
  });
};

const getLatestMessages = async (_req, res, next) => {
  database.getLatestMessages(10, ({ messages, error }) => {
    if (error) return next(error);

    res.status(200).json(messages);
  });
};

module.exports = { getLatestMessages, addNewMessage };
