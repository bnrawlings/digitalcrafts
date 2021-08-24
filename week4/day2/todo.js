const holder = document.querySelector(".form-cont");
const title = document.createElement("h1");
title.innerHTML = "TO-DO LIST"
holder.append(title)

const instruct = document.createElement("p");
instruct.innerHTML = "Create a To-Do List by entering your action item in the feild below:";
holder.append(instruct)

const input = document.querySelector(".inputField")
const newListItem = document.createElement("li")
newListItem.innerHTML = input.value
