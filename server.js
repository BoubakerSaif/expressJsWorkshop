const express = require("express");
const userRoutes = require("./routes/user");

const app = express();
// app.use(express.static("public"));

app.use("/users", userRoutes);
app.get("/users", (req, res) => {
  res.send("First One");
});
app.listen(5000, () => {
  console.log("Server is running");
});
