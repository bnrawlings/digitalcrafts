const subBtn = document.querySelector(".subBtn")

const getTaskList = async () => {
    const url = "https://localhost:3006/get_task";
    const taskList = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        }
    })
    

}
const json = await taskList.json()
for (task of json){
    
}

subBtn.addEventListener("on click", () => getTaskList())    