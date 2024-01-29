const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("HEY");
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  {
    if (!name || !email || !password) {
     return res.status(422).json({ error: "Please enter all the fields" });
    }
    res.json({ message: "Successfully Posted" });
  }
});

module.exports = router;
