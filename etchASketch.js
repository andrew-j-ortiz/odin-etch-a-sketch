// DOM elements
const domGridContainer = document.getElementById("gridContainer");

// generate grids inside the grid container
function generateGrids(intGrids) {
    for (let index = 0; index < intGrids; index++) {
        const grid = document.createElement("div")
        grid.id = "grid_" + index
        grid.onmouseover = (event)=>{
            document.getElementById(event.target.id).classList.add("grid_darkened")
        }
        domGridContainer.appendChild(grid)
    }
}

generateGrids(256)