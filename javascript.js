container = document.getElementById("container");
/* Makes the window a square based on the smaller of height or width. */
(window.innerWidth < window.innerHeight) ?
    container.style.height = "100vw" :
    container.style.width = "100vh"

numberSquares = 16;
for (s = 0; s < numberSquares * numberSquares; s++) {
    square = document.createElement("div");
    square.classList.add("square");
    /* Define the squares' dimensions by the smaller of height or width. */
    (window.innerWidth < window.innerHeight) ?
        square.style.width = `${Math.floor(100 / numberSquares)}vw` :
        square.style.height = `${Math.floor(100 / numberSquares)}vh`
    container.appendChild(square);
}

console.log(`${Math.floor(100 / numberSquares)}%`)