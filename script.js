const container = document.querySelector(".pixels-container");
const gridInput = document.querySelector("#gridValue")
const inputButton = document.querySelector(".changeButton")
const clearButton = document.querySelector("#clearSketch")
let gridValue = 16
let isMouseDown = false

//Generar el grid inicial
generateGrid(gridValue);

//Revisar cada 100ms si se ha cambiado el input
setInterval(() => {
  inputButton.disabled = !isInputValid(gridInput.value)
}, 100)

//Revisar si el mouse está presionado o no dentro del grid
container.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isMouseDown = true
});
container.addEventListener("mouseup", (e) => {
  e.preventDefault()
  isMouseDown = false
})
document.addEventListener("mouseup", (e) => {
  e.preventDefault()
  isMouseDown = false
})
clearButton.addEventListener("click", () => clear())

/**
 *Genera el grid dependiendo del valor que se indique.
 *El grid resultará en value X value.
 * @param {*} value
 * @author JaelAguilar
 */
function generateGrid(value) {
  for (let i = 0; i < value; i++) {
    let row = document.createElement("div")
    for (let j = 0; j < value; j++) {
      let pixel = document.createElement("div")
      configurePixel(pixel)
      row.appendChild(pixel)
    }
    //column.innerText = "h";
    row.classList.add("row")
    container.appendChild(row)
  }
}


function changeGrid() {
  container.innerHTML = ""
  generateGrid(gridInput.value)
}


/**
 * Chacks if input is an integer and 1 < number < 64
 * @param {*} number
 * @returns If input is valid
 */
function isInputValid(number) {
  if (isNaN(number) || parseInt(number) > 100
    || parseInt(number) < 1 || number == "") {
    return false
  }
  return true
}


function paint(pixel, isClicked) {
  if (isMouseDown || isClicked) {
    pixel.classList.add("colored")
  }
}

function configurePixel(pixel) {
  pixel.classList.add("pixel")
  pixel.addEventListener("mouseenter", (e) => {
    paint(e.target, false)
  })
  pixel.addEventListener("click", (e) => {
    paint(e.target, true)
  })
}

/**
 *Clears the content of the grid

 *@author ObieMunoz
 */
function clear() {
  document.querySelectorAll(".colored").forEach(node => {
    node.classList.remove("colored")
  })
}
