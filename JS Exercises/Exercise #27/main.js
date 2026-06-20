

function fetchStudentData(){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const present = true;
            if(present){
                resolve({
                    id: 1,
                    name: "John M."
                })
            }else{
                reject("Failed to make attendance")
            }
        }, 200);
    })
}

fetchStudentData()
    .then((data)=> console.log("Student Data", data))
    .catch((err)=> console.log(err))