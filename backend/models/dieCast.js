const { Sequelize, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/database.config");

const Diecast = sequelize.define("Diecast", {
  model_id: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  teams: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  year: {
    type: INTEGER(4),
    allowNull: false,
  },
  driver: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  race: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ref: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Diecast;
