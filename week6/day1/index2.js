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
const cowsay = require("cowsay");
const express = require("express");
const app = express();

app.delete("/deleteCowUser", (req, res) => {
    res.send(console.log("cowUser deleted"))});
  app.listen(3000)