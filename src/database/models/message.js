const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const message = sequelize.define("message", {
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.SMALLINT,
    defaultValue: 0,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = message;
