/* Function Definitiions */
function colorMe(e) {
    this.style.backgroundColor = "black";
}

function generateGrid(squaresPerSide) {
    if (squaresPerSide > 100) squaresPerSide = 100;
    numberSquares = squaresPerSide * squaresPerSide;

    for (s = 0; s < numberSquares; s++) {
        square = document.createElement("div");
        square.classList.add("square");

        /* Define the squares' dimensions by the smaller of height or width. */
        (window.innerWidth < window.innerHeight) ?
            square.style.width = `${Math.floor(100 / squaresPerSide)}vw` :
            square.style.height = `${Math.floor(100 / squaresPerSide)}vh`

        square.addEventListener("pointerenter", colorMe);
        container.appendChild(square);
    }
}

function removeSquares() {
    squares = document.getElementsByClassName("square");

    while (squares.length > 0) {
        squares.item(0).remove();
    }
}

function getNewGrid(e) {
    const squaresPerSide = parseInt(prompt("How many squares per side?"));
    if (isNaN(squaresPerSide)) return; // Abort if input is invalid

    removeSquares();
    generateGrid(squaresPerSide);
}

/* Page Logic */
generateButton = document.getElementById("generate");
generateButton.addEventListener("click", getNewGrid);

container = document.getElementById("container");
/* Makes the grid a square based on the smaller of height or width. */
(window.innerWidth < window.innerHeight) ?
    container.style.height = "100vw" :
    container.style.width = "100vh"

generateGrid(16);
