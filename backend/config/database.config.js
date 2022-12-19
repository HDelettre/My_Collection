// LOADING ENVIRONMENT VARIABLES
require("dotenv").config({path: "./config/.env"});

// BASE DE DONNEES RELATIONNELLE
// MYSQL / SEQUELIZE

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion à MySQL réussie !");
  } catch (error) {
    console.log("Connexion à MySQL échouée ! ", error);
  }
})();

module.exports = sequelize;
