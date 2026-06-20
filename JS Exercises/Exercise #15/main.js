

// let students = ["Ali", "Omar", "Gele"];
// for(let student of students){
//     function greet(){
//         console.log("Hello Mr." +student);
//     }
//     greet()
// }

// let student = {
//     name: "Absh",
//     Id: 1203,
//     age: 30,
//     DoB: 1990
// }
// for(let key in student){
//     console.log(student[key]);
    
// }

const people = [
    {
        name: "Ali",
        city: "Bosaso",
        age: 50
    },
    {
        name: "Gelle",
        city: "Mogadisho",
        age: 30
    },
    {
        name: "Jama",
        city: "Hargeisa",
        age: 20
    }
];

console.log("Properties and values of each person");
    
for(const person of people ){
    
    for(const key in person){
        console.log(key+ " :" + person[key]);
    }
    console.log("_____");
}


