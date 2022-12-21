const {Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../config/database.config');

const Diecast = require('./dieCast');


// const Diecast_Pictures = sequelize.define('Diecast_Pictures', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement:true,
//     primaryKey:true,
//     unique:true,
//     allowNull: false
//   },
//   pictureName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   diecast_id: {
//     type: DataTypes.INTEGER(4),
//     references: {
//       model:Diecast,
//       key: 'model_id'}
//   }
// });

// module.exports = Diecast_Pictures;
