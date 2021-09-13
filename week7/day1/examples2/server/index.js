const express = require("express");
const app = express();
const PORT = 3009
const creds = require("./db");

//middleware
app.use(express.json());
//middleware

    //CREATE
app.post("/createUser", (req, res) => {
    res.send("/createUser");
})
    //READ
app.get("/getUser", (req, res) => {
    // res.send("/createUser");
    creds.connect((err,client,release) => {
        client.query("RAW SQL GOES HERE", (err, result) => {
            console.log(err);
            console.log(result);
            if (err){
                res.status(400).send(err.stack);
            }
        });
    });
});
    //UPDATE
app.put("/updateUser", (req, res) => {
    res.send("/createUser");
})    
    //DELETE
app.post("/deleteUser", (req, res) => {
    res.send("/createUser");
});



app.listen(PORT, console.log(`Listening on port ${PORT}`));
