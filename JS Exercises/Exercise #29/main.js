

async function fetchData(){
    console.log("Start fetching data");
    
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    // const response = await fetch("data.json");
    

    const data = await response.json()

    console.log("response ", data);
    

}
fetchData()