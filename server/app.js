require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const { MONGOURI } = require("./keys");
const PORT = process.env.PORT || 5000;

// NOTE : The Skeleton of the database is created by the attributes and this skeleton is named Schema or a Blueprint.

// const customMiddleware = (req, res, next) => {
//   console.log("Middleware Executed!");
//   next();
// };

// app.use(customMiddleware); NOTE: This is for all the Routes

// app.get("/", (req, res) => {
//   console.log("Bunny");
//   res.send("Hello Bunny");
// });
// app.get("/about", customMiddleware, (req, res) => {
//   console.log("About");
//   res.send("About");
// });

mongoose.connect(MONGOURI);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error : ", err);
});

require("./models/user");
require("./models/post");
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
