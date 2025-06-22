# Graph Algorithm Visualizer (Full Stack Project)

This project is a full-stack web application that allows users to visually explore and understand the working of common graph search algorithms: **BFS (Breadth-First Search), DFS (Depth-First Search), and A* (A-Star) Algorithm**. Users can create custom obstacle configurations, visualize the search process step-by-step, and save/load their created grids using a MongoDB backend.

---

## 🚀 Features

- 🎯 Visualize BFS, DFS and A* Search algorithm on a 20x20 grid.
- 🧱 Add/remove obstacles interactively to see algorithm behavior.
- 💾 Save and load grid configurations with backend integration.
- 🔄 Reset and rerun algorithms on any custom grid.
- 🌐 Fully responsive frontend using HTML, CSS, and Vanilla JavaScript.
- ⚙️ Backend REST APIs built with Node.js, Express, MongoDB.
- ☁️ Hosted frontend (optional: Netlify) & backend (optional: Render/Railway).

---

## 🛠️ Tech Stack

| Layer      | Technology     |
|------------|-----------------|
| Frontend   | HTML, CSS, Vanilla JavaScript |
| Algorithms | BFS, DFS, A* Search (written from scratch) |
| Backend    | Node.js, Express.js |
| Database   | MongoDB (via Mongoose ORM) |
| Deployment | Netlify (frontend), Render / Railway (backend) |

---

## 🖥️ Project Structure

graph-visualizer-fullstack/
│
├── backend/ (Node.js Backend)
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── app.js
│ ├── config.js
│ └── .env
│
├── frontend/ (Frontend UI)
│ ├── index.html
│ ├── visualizer.html
│ ├── about.html
│ ├── contact.html
│ ├── css/
│ └── js/
│
└── README.md
