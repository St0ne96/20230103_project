const express = require("express");
const userRouter = require("./routes/user.routes.js");

const app = express();

require("dotenv").config();
// console.log(process.env); // remove this after you've confirmed it is working
// console.log("process.env.PORT:", process.env.PORT);
// console.log("process.env.PORT type:", typeof process.env.PORT);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", [userRouter]);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});