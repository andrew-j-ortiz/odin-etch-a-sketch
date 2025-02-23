// DOM elements
const domGridContainer = document.getElementById("gridContainer");
const domLayoutButton = document.getElementById("layoutButton");
const domClearButton = document.getElementById("clearButton");

domLayoutButton.addEventListener("click", ()=>{
    const intNewGridSize = Number(prompt("Enter new grid size (cannot be more than 100): "))
    if (intNewGridSize > 100) {
        alert("That number exceeds 100. Please enter a number between 1 and 100.")
    } else {
        changeGrid(intNewGridSize);
    }
})

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

generateGrids(256);

// change the size of the grid layout
function changeGrid(intGrids) {
    const intGridMeasure = intGrids * intGrids;
    const intGridSize = 608 / intGrids;

    document.getElementById("gridContainer").innerHTML = "";

    generateGrids(intGridMeasure)

    for (let index = 0; index < intGridMeasure; index++) {
        document.getElementById("grid_" + index).style.width = intGridSize + "px"
        document.getElementById("grid_" + index).style.height = intGridSize + "px"
    }
}
