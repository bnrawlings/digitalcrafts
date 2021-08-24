//document object, or just the document

//paper first method
const holder = document.querySelector(".maincontain");

//getElementsByTageName('p')
//getElementsByClassName('link')
//getElementById('password') 

//querySelector('#password') --gets one thing that matches search condition
//querySelectorAll('.link')--gets all the things that matches search condition

//ypu chose what you want to write
const studentName = document.createElement("p");

//you write the words out
studentName.innerHTML = "Britty"

//append your thought onto the actual paper
holder.append(studentName)

//1.querySelector
//2.createElement
//3.change innerHTML of the element
//4.append to what you selected

const input = document.querySelector(".input")
const submitButton = document.querySelector(".submit-button")
const valueOfInput = input.value