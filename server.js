const express = require("express");
const userRoutes = require("./routes/user");

const app = express();
// app.use(express.static("public"));
// app.use(logger);
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

app.use("/users", userRoutes);

// function logger(req, res, next) {
//   console.log(req.originalUrl);
//   next();
// }
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
