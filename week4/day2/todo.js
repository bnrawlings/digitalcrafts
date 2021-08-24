const holder = document.querySelector(".form-cont");
const title = document.createElement("h1");
title.innerHTML = "TO-DO LIST"
holder.append(title)

const instruct = document.createElement("p");
instruct.innerHTML = "Create a To-Do List by entering your action item in the feild above:";
holder.append(instruct)

const maincontain = document.querySelector(".main")
const input = document.querySelector(".inputField")
const submitButton = document.querySelector(".submitButton")
const newListItem = document.createElement("li")

function alertMe() {
    const newListItem = document.createElement("li")
    const valueOfInput = input.value;
    newListItem.innerHTML = valueOfInput;
    maincontain.append(newListItem);
    console.log(valueOfInput);
  }

  function successMessage() {
    alert("This action item has been added to you to-do list!");
  }
  submitButton.addEventListener("click", () => {
    successMessage();
    alertMe();
  })