const express = require("express");
const app = express();
const PORT = 3009


//middleware
app.use(express.json());
//middleware

    //CREATE
app.post("/createUser", (req, res) => {
    res.send("/createUser");
})
    //READ
app.get("/getUser", (req, res) => {
    res.send("/createUser");
})
    //UPDATE
app.put("/updateUser", (req, res) => {
    res.send("/createUser");
})    
    //DELETE
app.post("/deleteUser", (req, res) => {
    res.send("/createUser");
});



app.listen(PORT, console.log(`Listening on port ${PORT}`));
