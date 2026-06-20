// Exercise #21
const numbers = [1,2,3,4,5];
const multiply = numbers.reduce((multiplication, number)=> multiplication * number, 1);
console.log("Multiplication of this array is : " + multiply);




// const numbers = [1,2,3,4,5,6];
// const oddNumbers = numbers.filter((number)=> number % 2 !== 0);
// console.log(oddNumbers);


// const scores = [20, 80, 100, 20, 34, 90];
// const fail = scores.filter((score)=> score <= 50);
// console.log("Failed Scores : " + fail);
// const sum = scores.reduce((total, score) => total + score, 0);
// console.log(sum);
