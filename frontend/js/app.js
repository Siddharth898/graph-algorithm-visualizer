const rows = 20;
const cols = 20;
let grid = [];
let startNode = { row: 0, col: 0 };
let endNode = { row: rows - 1, col: cols - 1 };

function createGrid() {
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = '';
    grid = [];

    for (let row = 0; row < rows; row++) {
        let gridRow = [];
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.id = `${row}-${col}`;
            cell.addEventListener("click", () => toggleObstacle(row, col));
            gridContainer.appendChild(cell);
            gridRow.push({ row, col, obstacle: false });
        }
        grid.push(gridRow);
    }
}

function toggleObstacle(row, col) {
    const cell = document.getElementById(`${row}-${col}`);
    if (grid[row][col].obstacle) {
        cell.classList.remove("obstacle");
        grid[row][col].obstacle = false;
    } else {
        if (!(row === startNode.row && col === startNode.col) && !(row === endNode.row && col === endNode.col)) {
            cell.classList.add("obstacle");
            grid[row][col].obstacle = true;
        }
    }
}

function startAlgorithm() {
    resetVisited();
    const algo = document.getElementById("algorithm").value;
    if (algo === "bfs") bfs(grid, startNode, endNode);
    if (algo === "dfs") dfs(grid, startNode, endNode);
    if (algo === "astar") astar(grid, startNode, endNode);
}

function resetVisited() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            document.getElementById(`${row}-${col}`).classList.remove("visited", "path");
        }
    }
}

function resetGrid() {
    createGrid();
}

// Fullstack Save Grid API
async function saveGrid() {
    const name = prompt("Enter name for your grid:");
    if (!name) return;

    const gridData = grid.map(row => row.map(cell => cell.obstacle));
    const res = await fetch('http://localhost:5000/api/grids/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, gridData })
    });
    const data = await res.json();
    alert('Grid saved successfully!');
}

// Load all saved grids
async function fetchGrids() {
    const res = await fetch('http://localhost:5000/api/grids/all');
    const data = await res.json();
    const container = document.getElementById("savedGrids");
    container.innerHTML = "<h3>Saved Grids:</h3>";
    data.forEach(gridItem => {
        const btn = document.createElement("button");
        btn.textContent = gridItem.name;
        btn.onclick = () => loadGrid(gridItem.gridData);
        container.appendChild(btn);
    });
}

function loadGrid(gridData) {
    createGrid();
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            grid[row][col].obstacle = gridData[row][col];
            const cell = document.getElementById(`${row}-${col}`);
            if (gridData[row][col]) {
                cell.classList.add("obstacle");
            }
        }
    }
}

window.onload = createGrid;
