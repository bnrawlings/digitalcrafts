// problem #1
// const cowsay = require("cowsay");
// const express = require("express");
// const app = express();

// app.post("/sendCowUserName", (req, res) => {
//     res.send(
//       cowsay.think({
//         text: "Adding cow user",
//         e: "oO",
//         T: "U ",
//       })
//     );
//   });
//   app.listen(3000)

// problem #2
// const cowsay = require("cowsay");
// const express = require("express");
// const app = express();

// app.post("/sendCowAppointment", (req, res) => {
//     res.send(
//       cowsay.say({
//         text: "Setting up cow Appointment",
//         e: "oO",
//         T: "U ",
//       })
//     );
//   });
//   app.listen(3000)

// problem #3
// const cowsay = require("cowsay");
// const express = require("express");
// const app = express();

// app.get("/getCowUserName", (req, res) => {
//     res.send(
//       cowsay.say({
//         text: "Adding cow user",
//         e: "oO",
//         T: "U ",
//       })
//     );
//   });
//   app.listen(3000)

// problem #4
// const cowsay = require("cowsay");
// const express = require("express");
// const app = express();

// app.get("/getCowAppointment", (req, res) => {
//     res.send(
//       cowsay.say({
//         text: "Setting up cow Appointment",
//         e: "oO",
//         T: "U ",
//       })
//     );
//   });
//   app.listen(3000)

//  problem #5
// const cowsay = require("cowsay");
// const express = require("express");
// const app = express();

// app.delete("/deleteCowUser", (req, res) => {
//     res.send(console.log("cowUser deleted"))});
//   app.listen(3000)

// Training Exercises (small)

// problem #1
// const express = require("express");
// const app = express();

// app.post("/hello", (req,res)=> {
//     res.send("Hello");
// })
// app.listen(3000);

// const express = require ("express");
// const app = express();

// app.get("/cats", (req,res)=>{
//     res.send("Meow")
// })
// app.listen(3000)

// const express = require("express");
// const app = express();

// app.put("/dogs", (req,res)=>{
//     res.send("Woof")
// })
// app.listen(3000)

// const express = require("express");
// const app = express();

// app.delete("/cats_and_dogs", (req,res)=>{
//     res.send("Dogs and Cats living togther....Mass hysteria!!")
// })
// app.listen(3000)

    // problem #2
    // const express = require("express");
    // const app = express()

    // app.get("/greet/Luke", (req,res)=>{
    //     res.send("Hello, Luke!")
    // })
    // app.listen(3000)

    // const express = require("express");
    // const app = express()

    // app.get("/greet/Ahsoka", (req,res)=>{
    //     res.send("Hello, Ahsoka!")
    // })
    // app.listen(3000)

    // const express = require("express");
    // const app = express()

    // app.get("/greet/Han", (req,res)=>{
    //     res.send("Hello, Han!")
    // })
    // app.listen(3000)

        // problem #3
        const express = require("express");
        const app = express();

        app.get("/greet/Tiana", (req,res)=>{
            res.send(`<h1>Hello,Tiana!<h1>`)
        })
        app.listen(3000)
