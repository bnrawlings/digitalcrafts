const Sequelize = require ("sequelize");
const { TodoList } = require("./models");
const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 3006
// const es6Renderer = require("express-es6-template-engine");

// app.engine("html", es6Renderer);
// app.set("views", "templates");
// app.set("view engine", "html");




app.use(express.json());
app.use(cors());
// .create()
// .findAll()
// .findByPk()
// .update()
// .destroy()

// CREATING or POSTING DATA TO DATABASE
app.post("/create_task", async (req, res) => {
 const { taskTodo, priority } = req.body;
    const newTask = await TodoList.create({
        taskTodo: taskTodo,
        priority: priority,
        
    });
    res.send({ newTask });
});

// GETTING TASK FROM DATABASE
app.post("/get_task", async (req, res) => {
       const tasks = await TodoList.findAll();
       res.send(tasks);
   });

// GETTING SPECIFIC DATA FROM DATABASE
app.post("/get_task_by_priority", async (req, res) => {
    const tasks = await TodoList.findAll({
        attributes: ["priority"]
    });
    res.send(tasks);
});
// GETTING SINGLE TASK DATA
app.post("/get_task/:id", async (req, res) => {
    const tasks = await TodoList.findByPk(req.params.id);
    res.send(tasks);
});
// UPDATING TASK DATA
app.post("/update_task/:id", async (req, res) => {
    const tasks = await TodoList.update(req.body, {
        where: {
            id: req.params.id,
        },
    });
    res.send(tasks);
});
// DELETING USER DATA
app.post("/delete_task/:id", async (req, res) => {
     await TodoList.destroy( {
        where: {
            id: req.params.id,
        },
    });
    res.send("Your task has been deleted");
});


app.listen(PORT, console.log(`Listening on port ${PORT}`))