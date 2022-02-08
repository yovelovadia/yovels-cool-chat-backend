const { message } = require("../models");

const addNewMessage = async (messageObject, callback) => {
  try {
    await message.build(messageObject).save();
    callback({});
  } catch (error) {
    callback({ error });
  }
};

const getLatestMessages = async (numberOfMessages, callback) => {
  try {
    const messages = await message.findAll({
      limit: numberOfMessages,
      order: [["updatedAt", "DESC"]],
    });
    callback({ messages });
  } catch (error) {
    callback({ error });
  }
};

module.exports = { addNewMessage, getLatestMessages };
