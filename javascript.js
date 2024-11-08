container = document.getElementById("container");

numberSquares = 16;
for (r = 0; r < numberSquares; r++) {
    row = document.createElement("div");
    row.classList.add("row");

    for (s = 0; s < numberSquares; s++) {
        square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${Math.floor(100 / numberSquares)}%`
        row.appendChild(square);
    }

    container.appendChild(row);
}


console.log(`${Math.floor(100 / numberSquares)}%`)