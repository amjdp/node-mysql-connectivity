const express = require("express");
const app = express();
const port = 3000;

// app.post("/", function (req, res) {
app.get('/', function (req, res) {
  res.send("Hello World from express JS");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
