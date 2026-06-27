

function addNewImage(){
    const image = document.querySelector("#image")

    const url = prompt("Enter your image URL: ")
    image.setAttribute ("src", url)

    
    const width = prompt("Enter the width in px");
    image.style.width = width

    const height = prompt("Enter the height in px");
    image.style.height = height

    const backgroundColor = prompt("Enter the the background Color");
    image.style.backgroundColor = backgroundColor

    const padding = prompt("Enter the padding in px");
    image.style.padding = padding

    const borderRadius = prompt("Enter the borderRadius in px");
    image.style.borderRadius = borderRadius
}