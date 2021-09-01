console.log("connected!")

const submitButton = document.querySelector(".submit")

function successMessage() {
    alert("Thanks, Your submission has been recieved! ");
  }
  submitButton.addEventListener("click", () => {
    successMessage();
  })