

const fruits = ["apple", "banana", "cherry"];
// const newFruits = fruits.map(function(fruit){
//     console.log(fruit.length + " " + fruit);
// });

const newFruits = fruits.map((fruit)=>{
    console.log(fruit + " " + fruit.length);
    
})