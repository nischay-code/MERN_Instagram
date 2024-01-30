require("dotenv").config();
module.exports = {
  MONGOURI: process.env.MONGO_URL,
  JWT_SECRET: "Bunny",
};
