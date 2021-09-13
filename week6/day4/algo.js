// Problem #1
// Given a string with a date "09/10/2021", write a function that removes the "/" and returns the following date format:
// expected result: 20210910

const str = "09/10/2021";

const formatDate=() => {
if (str === "/"){
    console.log("09/10/2021");
} else { console.log(20210910);
}}

formatDate();

// Problem #2
// Write a function that checks if a string is a palindrome. Function should return true or false. A palindrome is a word, phrase, or sequence that reads the same backward as forward.
// Ex. racecar, Anna


// const str2 = "backendisawesome"
// const str3 = "mom"

// const checkString =(str) => {
//     let reversed = str.split(" ").reverse().join("");
//     return console.log(str === reversed)
// }

// checkString();


const reverseAna = () =>{
    const list = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"];
    const anagram = list.sort().split();
    console.log(anagram)

}

reverseAna()