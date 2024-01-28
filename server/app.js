const express = require("express");
const app = express();
const PORT = 5000;

const customMiddleware = (req, res, next) => {
  console.log("Middleware Executed!");
  next();
};

// app.use(customMiddleware); NOTE: This is for all the Routes

app.get("/", (req, res) => {
  console.log("Bunny");
  res.send("Hello Bunny");
});
app.get("/about", customMiddleware, (req, res) => {
  console.log("About");
  res.send("About");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
