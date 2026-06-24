
async function fetchData(){
    try{
        console.log("Starting fetching data");
        // GET METHOD
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        
        if(!response.ok){
            throw new Error (`HTTP error! Status ${response.status}` )
        }
        const data = await response.json()
        console.log(data);
        
        
    }catch(error){
        console.log(error);
        
    }
}

fetchData()

