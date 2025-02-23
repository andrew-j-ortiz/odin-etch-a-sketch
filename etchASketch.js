// DOM elements
const domGridContainer = document.getElementById("gridContainer");

// generate grids inside the grid container
function generateGrids(intGrids) {
    for (let index = 0; index < intGrids; index++) {
        const grid = document.createElement("div")
        domGridContainer.appendChild(grid)
    }
}

generateGrids(256)