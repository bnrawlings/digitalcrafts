async function getNorrisJoke(){
    // const norrisContain = document.querySelector("norrisJokes");
    const norrisJokes = await fetch("https://official-joke-api.appspot.com/random_joke");
    const jsonJokes = await norrisJokes.json();
    console.log(jsonJokes)
    const newJoke = document.createElement("h2")
    newJoke.innerHTML = jsonJokes
    // norrisContain.append(newJoke);
    return jsonJokes;
    
}

const jokeButton = document.querySelector(".pushButton");
jokeButton.addEventListener("click", () => getNorrisJoke());
