console.log("connected!")
// Write a function to return the maximum occurring character in the input string e.g., if input string is "Test" then function should return 't'.
// Note: capital letter 'T' and small letter 't' should count as the same.

str1 = "holddogecoinkek"
// result: o
str2 = "aahhanotheralgo"
// result: a
str3 = "randywhyyyyy"
// result: y

const findSame = () =>{
    const repeat = str1.split("") ; 
     console.log(repeat);
    for (let index = 0; index < repeat.length; index ++){
        const result = repeat [index];
            console.log(result);
            // const single = result.Max();
            // if (result != single);
            // console.log (single)
        }
  
        // console.log (result);
}
findSame()

//  Given an array of numbers and a stand alone number, return all combinations of numbers in the array that add up to the stand alone number.
// Result: [ 5, -2 ], [ 3, 0 ], [ -2, 5 ], [ 0, 3 ]


// const addArray = () => {
//     let array = [2,5,8,3,-2,9,0];
//     let targetSum = 3;
//         for (let index = 0; index < array.length; index++){
//             const newArray = array.split("");
//             if(index + array.length === targetSum){
//                 console.log(array);
//         };
//     };
// };

// addArray()


// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// For example, if N = 8, the function should return the number '21' which is the 8th index of the Fibonacci sequence

N = 8
// result: 21