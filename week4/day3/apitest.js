async function getNorrisJoke(){
    // const norrisContain = document.querySelector("norrisJokes");
    const norrisJokes = await fetch("http://api.icndb.com/jokes/random");
    const jsonJokes = await norrisJokes.json();
    // console.log(jsonJokes)
    // const newJoke = document.createElement("h2")
    // newJoke.append(jsonJokes);
    return jsonJokes;
    
}

const jokeButton = document.querySelector(".pushButton");
jokeButton.addEventListener("click", () => getNorrisJoke());
