const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(express.static('../library'))

app.use(bodyParser.urlencoded({extended:false}))
app.set("view engine", "pug");

app.get("/", function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.post("/submit", function (req, res) {
    console.log(req.body)
    res.render("index", {
      title: "Data Saved",
      message: "Data Saved successfully",
    });
  });

app.listen(port, () => 
  console.log(`Example app listening on port ${port}`)
);
