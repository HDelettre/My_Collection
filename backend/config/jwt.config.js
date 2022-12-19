// JSON WEB TOKEN
const jwt = require("jsonwebtoken");

// LOADING ENVIRONMENT VARIABLES
require("dotenv").config({path: "./config/.env"});

// CHECKING USER TOKEN
module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
    const userToken = decodedToken.id;

    req.auth = {
      userToken: userToken,
    };

    next();
  } catch (error) {
    res.status(401).json({ error: error + " requête non authentifiée" });
  }
};

// In the following controllers, used req.auth instead of userId
