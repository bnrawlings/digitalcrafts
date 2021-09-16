
//TO CREATE NEW TASK IN HTML
const createBtn = document.querySelector(".create_btn")
const addTask = async () => {
    const url = "http://localhost:3006/create_task";
    const taskTodo = document.querySelector(".new_tasks").value;
    const priority = document.querySelector(".new_prio").value;
    const newTask = {
        taskTodo,
        priority, }; 
    const createTask = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newTask),
    });
    console.log(createTask)
};
createBtn.addEventListener("click", () => addTask()) 

//TO REMOVE TASK FROM DATABASE
const deleteBtn = document.querySelector(".delete_btn")
const destroyTask = async () => {
    const taskTodelete = document.querySelector(".delete_id").value;
    const url = `http://localhost:3006/delete_task/${taskTodelete}`;
    const deleteTask = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        // body: JSON.stringify(deleteTask),
    })
    console.log("Your task has been deleted")
};
deleteBtn.addEventListener("click", () => destroyTask()) 

//TO UPDATE TASK
const updateBtn = document.querySelector(".update_btn");
const updateTask = async () => {
    const taskUpdateId = document.querySelector(".update_id").value;
    const url = `http://localhost:3006/update_task/${taskUpdateId}`;
    const taskUpdate = document.querySelector(".update_tasks").value;
    const taskPrio = document.querySelector(".update_prio").value;
    const updatedTask = {
        taskTodo : taskUpdate,
        priority : taskPrio,
    };
        console.log(updatedTask)
    const updateList = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(updatedTask),
    });
    console.log(updateList)
};
updateBtn.addEventListener("click", () => updateTask())    

//TO VIEW TASK LIST ON HTML
const readBtn = document.querySelector(".read_subBtn")
const getTaskList = async () => {
    const url = "http://localhost:3006/get_task";
    const taskList = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    });
    const json = await taskList.json()
        for (task of json){
            const taskTile = task.taskTodo;
            const priority = task.priority;
            const id = task.id;
            const newList = document.querySelector(".read_task");
            const taskNumber = document.createElement("p");
            const title = document.createElement("p");
            const prio = document.createElement("li");
            taskNumber.innerHTML = id;
            title.innerHTML = taskTile;
            prio.innerHTML = priority;
            newList.append(taskNumber,title, prio);
};
    console.log(json)
};
readBtn.addEventListener("click", () => getTaskList())    