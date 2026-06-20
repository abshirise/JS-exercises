// Asynchronous and synchronous


// blocking
function delayBlock(){
    alert("Accept to fetch user Data");
    return {id: 1, name: "John M."}   
}
console.log("The above function is accepted now");

const userdata = delayBlock();
console.log(userdata);

console.log("Last message ");


// Unblocking
function unBlock(callback){
    setTimeout(() => {
        const user = {id: 1, name: "John M."}
        callback(user)
        console.log("After 2 seconds");
        
    }, 2000);  
}
console.log("The above function is accepted now");

unBlock(function (user){
    console.log(user);
})
console.log("Immediate message ");



