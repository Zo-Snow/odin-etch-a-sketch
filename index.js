const container = document.querySelector(".drawing-container");

let defaultNum = 16;
let isDrawing = false;

window.addEventListener("mousedown", () => {
    isDrawing = true;
});

window.addEventListener("mouseup", () => {
    isDrawing = false;
});

createGrids(defaultNum);
document.querySelector(".apply").addEventListener('click', setGrids);
document.querySelector(".clear").addEventListener('click', clearGrids);
document.querySelector(".rainbow").addEventListener('click', setRainbow);
document.querySelector(".black").addEventListener('click', setBlack);

// Functions

function createGrids(num) {

for (let i = 0; i < num; i++) {
    const column = document.createElement("div");
    column.classList = "column";
    container.appendChild(column);

    for (let i = 0; i < num; i++) {
    const square = document.createElement("div");
    square.classList = "square";
    column.appendChild(square);

    square.addEventListener('mousemove', () => {
        if (isDrawing) {square.style = "background-color: black";}
    })
}
}
}

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return "rgb(" + r + "," + g + "," + b + ")";
}

function setRainbow() {
    let color = randomRGB();
    document.querySelectorAll('.square').forEach((box) => {
        box.addEventListener('mousemove', () => {
            if (isDrawing) {box.style = `background-color: ${randomRGB()}`;}
        })
    })  
}

function setBlack() {
    document.querySelectorAll('.square').forEach((box) => {
        box.addEventListener('mousemove', () => {
            if (isDrawing) {box.style = "background-color: black";}
        })
    }) 
}

function setGrids() {

    const userEntry = document.querySelector('input').value;

    if (userEntry === "e" || userEntry === '' || userEntry > 100 || userEntry < 1) {
        alert("Please enter a number from 1 to 100");
    } else {
        deleteGrids();
        createGrids(parseInt(userEntry));
        defaultNum = parseInt(userEntry);
    }
}

function deleteGrids() {
    document.querySelectorAll('.square').forEach((box) => {
        box.remove();
    })

    document.querySelectorAll('.column').forEach((c) => {
        c.remove();
    })
}

function clearGrids() {
    deleteGrids();
    createGrids(parseInt(defaultNum));
}








