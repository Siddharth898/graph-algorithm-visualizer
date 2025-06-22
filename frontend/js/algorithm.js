// BFS
function bfs(grid, start, end) {
    let queue = [start];
    let visited = new Set();
    visited.add(`${start.row}-${start.col}`);
    let parentMap = {};

    while (queue.length > 0) {
        let current = queue.shift();
        document.getElementById(`${current.row}-${current.col}`).classList.add("visited");
        if (current.row === end.row && current.col === end.col) {
            reconstructPath(parentMap, end);
            return;
        }
        for (let [dr, dc] of [[1,0],[0,1],[-1,0],[0,-1]]) {
            let nr = current.row + dr;
            let nc = current.col + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !grid[nr][nc].obstacle && !visited.has(`${nr}-${nc}`)) {
                queue.push({ row: nr, col: nc });
                visited.add(`${nr}-${nc}`);
                parentMap[`${nr}-${nc}`] = current;
            }
        }
    }
    alert("No Path Found!");
}

// DFS
function dfs(grid, start, end) {
    let stack = [start];
    let visited = new Set();
    visited.add(`${start.row}-${start.col}`);
    let parentMap = {};

    while (stack.length > 0) {
        let current = stack.pop();
        document.getElementById(`${current.row}-${current.col}`).classList.add("visited");
        if (current.row === end.row && current.col === end.col) {
            reconstructPath(parentMap, end);
            return;
        }
        for (let [dr, dc] of [[1,0],[0,1],[-1,0],[0,-1]]) {
            let nr = current.row + dr;
            let nc = current.col + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !grid[nr][nc].obstacle && !visited.has(`${nr}-${nc}`)) {
                stack.push({ row: nr, col: nc });
                visited.add(`${nr}-${nc}`);
                parentMap[`${nr}-${nc}`] = current;
            }
        }
    }
    alert("No Path Found!");
}

// A*
function astar(grid, start, end) {
    let openSet = [start];
    let gScore = {};
    let fScore = {};
    let parentMap = {};

    gScore[`${start.row}-${start.col}`] = 0;
    fScore[`${start.row}-${start.col}`] = heuristic(start, end);
    let visited = new Set();

    while (openSet.length > 0) {
        openSet.sort((a, b) => fScore[`${a.row}-${a.col}`] - fScore[`${b.row}-${b.col}`]);
        let current = openSet.shift();
        document.getElementById(`${current.row}-${current.col}`).classList.add("visited");
        if (current.row === end.row && current.col === end.col) {
            reconstructPath(parentMap, end);
            return;
        }
        visited.add(`${current.row}-${current.col}`);
        for (let [dr, dc] of [[1,0],[0,1],[-1,0],[0,-1]]) {
            let nr = current.row + dr;
            let nc = current.col + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !grid[nr][nc].obstacle) {
                let tentativeG = gScore[`${current.row}-${current.col}`] + 1;
                if (!visited.has(`${nr}-${nc}`) || tentativeG < (gScore[`${nr}-${nc}`] || Infinity)) {
                    parentMap[`${nr}-${nc}`] = current;
                    gScore[`${nr}-${nc}`] = tentativeG;
                    fScore[`${nr}-${nc}`] = tentativeG + heuristic({ row: nr, col: nc }, end);
                    if (!openSet.some(n => n.row === nr && n.col === nc)) {
                        openSet.push({ row: nr, col: nc });
                    }
                }
            }
        }
    }
    alert("No Path Found!");
}

function heuristic(a, b) {
    return Math.abs(a.row - b.row) + Math.abs(a.col - b.col);
}

function reconstructPath(parentMap, end) {
    let current = end;
    while (parentMap[`${current.row}-${current.col}`]) {
        current = parentMap[`${current.row}-${current.col}`];
        if (current.row === 0 && current.col === 0) break;
        document.getElementById(`${current.row}-${current.col}`).classList.add("path");
    }
}
