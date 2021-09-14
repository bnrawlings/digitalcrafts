const express = require("express");
const app = express();
const PORT = 3002
const creds = require("./db");

//middleware
app.use(express.json());
//middleware

  //READ Customers
  app.get("/getCustomer", (req, res) => {
    // res.send("/getCustomer");
    creds.connect((err,client,release) => {
        client.query("SELECT * FROM customers", (err, result) => {
            console.log(err);
            console.log(result);
            if (err){
                res.status(400).send(err.stack);
            }
        });
    });
});

  //READ Orders
  app.get("/getOrder", (req, res) => {
    // res.send("/getOrder");
    creds.connect((err,client,release) => {
        client.query("SELECT * FROM orders", (err, result) => {
            console.log(err);
            console.log(result);
            if (err){
                res.status(400).send(err.stack);
            }
        });
    });
});

  //READ Cars
  app.get("/getCar", (req, res) => {
    // res.send("/getCar");
    creds.connect((err,client,release) => {
        client.query("SELECT * FROM cars", (err, result) => {
            console.log(err);
            console.log(result);
            if (err){
                res.status(400).send(err.stack);
            }
        });
    });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));