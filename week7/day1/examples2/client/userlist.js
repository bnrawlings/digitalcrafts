

const sendUser = () => {
    const user = document.querySelector(".userlist").value;
    console.log(userlist)};
    
    const button = document.querySelector(".submit");
    button.addEventListener("click", (e) => {
     sendUser(e);
    }
    )
    console.log("user is sent");
};