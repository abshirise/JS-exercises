let temperature = prompt("Temperature is :");
if(temperature < 0){
    console.log("Very Cold.");
} else if(temperature > 0 &&  temperature < 15){
    console.log("Cold");
} 
else if(temperature > 15 &&  temperature < 25){
    console.log("Warm");
} 
else{
    console.log("Is Hot");
}