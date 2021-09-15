
//TO CREATE NEW TASK IN HTML
const createBtn = document.querySelector(".create_btn")

const addTask = async () => {
    const url = "http://localhost:3006/create_task";
    const task = document.querySelector(".new_task").value;
    const prio = document.querySelector(".new_prio").value;
    const newTask = {
        task,
        prio,
    };
    
    
    
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























//TO RENDER TASK LIST ON HTML
const readBtn = document.querySelector(".read_subBtn")

const getTaskList = async () => {
    const url = "http://localhost:3006/get_task";
    const taskList = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
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