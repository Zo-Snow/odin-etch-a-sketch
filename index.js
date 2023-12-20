const container = document.querySelector(".drawing-container");

let userNumber = 16;
let isDrawing = false;

window.addEventListener("mousedown", () => {
    isDrawing = true;
});

window.addEventListener("mouseup", () => {
    isDrawing = false;
});


for (let i = 0; i < userNumber; i++) {
    const column = document.createElement("div");
    column.classList = "column";
    container.appendChild(column);

    for (let i = 0; i < userNumber; i++) {
    const square = document.createElement("div");
    square.classList = "square";
    column.appendChild(square);

    square.addEventListener('mousemove', (event) => {
        if (isDrawing) {square.style = "background-color: black";}
    })
}
}









