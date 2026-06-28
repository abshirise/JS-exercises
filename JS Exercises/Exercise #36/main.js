

const colorPicker = document.querySelector('#colorPicker')
const colorPreview = document.querySelector('#colorPreview')
const colorHistory = document.querySelector('#colorHistory')
const button = document.querySelector('#clearHistoryButton')


colorPicker.addEventListener('input', ()=>{
  const selectedColor = colorPicker.value; 
  colorPreview.style.backgroundColor = selectedColor
  addToHistory(selectedColor)
})


function addToHistory(color){
  const colors = document.createElement('li')
  colors.textContent = color
  colors.style.color = color
  colorHistory.appendChild(colors)
}

button.addEventListener('click', ()=>{
  colorHistory.innerHTML = ""
})

