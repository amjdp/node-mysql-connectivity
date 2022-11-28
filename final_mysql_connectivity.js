const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "cybersquare",
});

// var database_connection_status = '';

// connection.connect(function(error){
//     if(error)
//     {
//         database_connection_status = '<h3 class="text-center text_danger> MySQL Database Connection Error </h3>';
//     }
//     else
//     {
//         database_connection_status = '<h3 class="text-center text_danger> Node JS Application Succesfully connect to MySQL Database </h3>';
//     }
// })

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));

app.get("/", function (request, response, next) {
    response.send(`
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
<div class="container">
    <h1 class="text-center mt-3 mb-3">Submit Form Data in NodeJS</h1>
   
    <div class="card">
        <div class="card-header">Sample Form</div>
        <div class="card-body">
            <form method="POST" action="/submit">
                <div class="mb-3">
                    <label>First Name</label>
                    <input type="text" name="first_name" id="first_name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label>Last Name</label>
                    <input type="text" name="last_name" id="last_name" class="form-control" />
                    <div class="mb-3">
                        <label>Email</label>
                        <input type="text" name="email" id="email" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <input type="submit" name="submit_button" value="SUBMIT" class="btn btn-primary" />
                    </div>
                </div>
            </form>
        </div>
    </div>
</div> 
    `);
});

connection.connect(function (err) {
    console.log('aaaaaa')
    if (err) throw err;
    console.log("Connected..");
});

app.post("/submit", function (req, res) {

    var sql =
        "insert into form_data values('" +
        req.body.first_name +
        "','" +
        req.body.last_name +
        "','" +
        req.body.email +
        "')";

    connection.query(sql, (err) => {
        if (err) throw err;
        res.render("index", {
            title: "Data Saved",
            message: "Data Saved successfully",
        });
    });

    connection.end();
});


// app.post('/',function(request,response,next){
//     response.send(request.body);
// });

app.listen(port, () =>
    console.log(`Example app listening on port ${port}`)
);


// `+ database_connection_status + `


