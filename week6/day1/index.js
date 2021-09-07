// console.log ("Im in Node")

// const express = require("express");
// const app = express();

// // ES6 syntax for a route
// app.get("/", (req,res) => {
//     res.send("Hello");
// })
// app.listen(3000);

// const express = require("express");
// const app = express();

// app.post("/hello", (req,res)=> {
//     res.send("Hello");
// })
// app.listen(3000);

// const express = require ("express");
// const app = express();

// app.get("/cats", (req,res)=>{
//     res.send(`<h1>Meow</h1>`)
// })
// app.listen(3000)

const express = require("express");
const app = express();

app.put("/dogs", (req,res)=>{
    res.send("Woof")
})
app.listen(3000)

// const express = require("express");
// const app = express();

// app.delete("/cats_and_dogs", (req,res)=>{
//     res.send(`<h1>Dogs and Cats living togther....Mass hysteria!!</h1>`)
// })
// app.listen(3000)