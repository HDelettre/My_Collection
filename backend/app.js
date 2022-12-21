const express = require("express");

const cors = require("cors");

require("dotenv").config({ path: "./config/.env" });

// MYSQL / SEQUELIZE
(async () => {
  const sequelize = require("./config/database.config");
  // Synchronization of models
  require("./models/dieCast");
  require('./models/diecast.pictures');
  await sequelize.sync({ alter: true });
})();

// PATH TO ROUTES
// const authRoutes = require('./Routes/users');
const routeDiecast = require("./routes/diecast");

const app = express();

app.use("/pictures", express.static(__dirname + "/pictures"));

//app.use(cors);

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

// ROUTES CALLING
app.use("/api/diecast", routeDiecast);
// app.use('/api/auth', authRoutes);

// EXPORTS
module.exports = app;
