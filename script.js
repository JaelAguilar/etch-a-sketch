let container = document.querySelector(".pixels-container");
let gridValue = 16
let gridInput = document.querySelector("#gridValue")
let inputButton= document.querySelector(".changeButton")
console.log(gridInput)


generateGrid(gridValue);

setInterval(() => {
  inputChanged()
}, 100)


function generateGrid(value) {
    for (let i = 0; i < value; i++) {
      let row = document.createElement("div")
      for (let j = 0; j < value; j++) {
        let pixel = document.createElement("div")
        pixel.classList.add("pixel")
        row.appendChild(pixel)
      }
      //column.innerText = "h";
      row.classList.add("row")
      container.appendChild(row)
    }
}


function changeGrid() {
    alert("Introduzca")
}


function inputChanged() {
  //console.log(gridInput.value)
  inputButton.disabled = !isInputValid(gridInput.value);
  //console.log(isInputValid(gridInput.value))

}

function isInputValid(number) {
  if (isNaN(number) || parseInt(number) > 64 || parseInt(number) < 1 || number=="") {
    return false
  }
  return true
}
