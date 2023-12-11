const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home page");
});
router.get("/new", (req, res) => {
  res.send("This is a new page");
});

router.get("/:id", (req, res) => {
  res.send(`User get with id ${req.params.id}`);
});

module.exports = router;
