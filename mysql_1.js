const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(express.static("../library"));

app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cybersquare",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected..");
});

app.post("/submit", function (req, res) {
  console.log(req.body);
  res.render("index", {
    title: "Data Saved",
    message: "Data Saved successfully",
  });
});

connection.end();

app.listen(port, () => console.log(`Example app listening on port ${port}`));
