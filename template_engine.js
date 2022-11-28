const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hey Express",
    message: "Hello there!",
    expressjs: "Express JS Framework",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
