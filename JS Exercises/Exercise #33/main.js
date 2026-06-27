
const title = document.querySelector(".title")
console.log(title);

const text = document.querySelector(".text")
console.log(text);


function changeContent(){
    title.textContent = "Welcome to the DOM"
}

function changeElement(){
    text.innerHTML = "He <strong>HEEEY </strong>"
}