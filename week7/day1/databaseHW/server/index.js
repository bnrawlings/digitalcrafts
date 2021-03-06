const express = require("express");
const app = express();
const PORT = 3001
const creds = require("./db");

//middleware
app.use(express.json());
//middleware

    //CREATE
app.post("/addRestaurant", (req, res) => {
    // res.send("/addRestaurant");
    creds.connect((err,client,release) =>{
        client.query(`INSERT INTO resturants (name, address, city, state) VALUES ('${req.body.name}', '${req.body.address}', '${req.body.city}', '${req.body.state}');`, (err, results) => {
            console.log(err);
            console.log(results);
            if (err){
                res.status(400).send(err.stack);
            }
            res.status(200).send(results);
        });
      
    });
})
    //READ
app.get("/getRestaurant", (req, res) => {
    creds.connect((err, client,release) => {
        client.query("SELECT * FROM resturants", (err, result) => {
            console.log(err);
            console.log(result);
            if (err){
                res.status(400).send(err.stack);
            }
            res.status(200).send(result);
        });
    });
    });

   //CREATE
   app.post("/addMovie", (req, res) => {
    // res.send("/addRestaurant");
    creds.connect((err,client,release) =>{
        client.query(`INSERT INTO movies (title) VALUES ('${req.body.title}');`, (err, results) => {
            console.log(err);
            console.log(results);
            if (err){
                res.status(400).send(err.stack);
            }
            res.status(200).send(results);
        });
      
    });
})
    //READ
app.get("/getMovies", (req, res) => {
    creds.connect((err, client,release) => {
        client.query("SELECT * FROM movies", (err, result) => {
            console.log(err);
            console.log(result);
            if (err){
                res.status(400).send(err.stack);
            }
            res.status(200).send(result);
        });
    });
    });

app.listen(PORT, console.log(`Listening on port ${PORT}`));