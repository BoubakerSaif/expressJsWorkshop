const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  const { firstName, lastName } = req.body;
  res.send(`Hello, my name is ${firstName} ${lastName}`);
});

router.get("/new", (req, res) => {
  res.render("index");
});

module.exports = router;
