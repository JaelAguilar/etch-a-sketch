let container = document.querySelector(".pixels-container");
let gridValue = 16

generateGrid(gridValue);


function generateGrid(value) {
    for (let i = 0; i < value; i++) {
      let row = document.createElement("div")
      for (let i = 0; i < value; i++) {
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
