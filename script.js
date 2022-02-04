let container = document.querySelector(".container");
let gridValue=16
for (let i = 0; i < gridValue; i++) {
    let row = document.createElement("div");
    for (let i = 0; i < gridValue; i++) {
        let pixel = document.createElement("div")
        pixel.classList.add("pixel");
        row.appendChild(pixel);
    }
    //column.innerText = "h";
    row.classList.add("row");
    container.appendChild(row);
}