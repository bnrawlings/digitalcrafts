// console.log("js is working")


async function getFoxpics(){
    const foxContainer = document.querySelector(".fox-images");
    const foxPics = await fetch("https://randomfox.ca/floof/");
    const jsonfoxs = await foxPics.json();
    const foxPic = document.createElement("img")
    foxPic.src = jsonfoxs.image
    foxContainer.append(foxPic)
    return jsonfoxs;
}
getFoxpics()