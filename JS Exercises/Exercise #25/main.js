// spread and rest operators 

const array1 = [1,2,3];
const array2 = [...array1, 4,5,6]
console.log(array2);


// rest 

function multiply(...numbers){
    return numbers.reduce((total, num) => total * num, 1);
}

console.log(multiply(1,2));
