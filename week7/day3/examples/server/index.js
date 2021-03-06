const Sequelize = require ("sequelize");
const { Users } = require("./models");
const express = require("express");
const app = express();
const PORT = 3011
// const creds = require("./db");


app.use(express.json());
// .create()
// .findAll()
// .findByPk()
// .update()
// .destroy()

// CREATING or POSTING DATA TO DATABASE
app.post("/create_users", async (req, res) => {
 // const { firstName, lastName, email } = req.body;
    //DESTRUCTED CODE of above line
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const newUser = await Users.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
    });
    res.send({
        id: newUser.id,
    });
});

// GETTING DATA FROM DATABASE
app.post("/get_users", async (req, res) => {
       const users = await Users.findAll();
       res.send(users);
   });

// GETTING SPECIFIC DATA FROM DATABASE
app.post("/get_users_by_lastname", async (req, res) => {
    const users = await Users.findAll({
        attributes: ["lastName"]
    });
    res.send(users);
});
// GETTING SINGLE USER DATA
app.post("/get_users/:id", async (req, res) => {
    const user = await Users.findByPk(req.params.id);
    res.send(user);
});
// UPDATING USER DATA
app.post("/update_users/:id", async (req, res) => {
    const user = await Users.update(req.body, {
        where: {
            id: req.params.id,
        },
    });
    res.send(user);
});
// DELETING USER DATA
app.post("/delete_users/:id", async (req, res) => {
     await Users.destroy(req.body, {
        where: {
            id: req.params.id,
        },
    });
    res.send("Deleted");
});


app.listen(PORT, console.log(`Listening on port ${PORT}`))