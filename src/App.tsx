import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <main className="container">
    <nav className="navbar">
    <div className="logo">TeaTime</div>
      <div className="nav-links">
        <a href="#">Dashboard</a>
        <a href="#">Tasks</a>
        <a href="#">Timer</a>
      </div>
    </nav>
    <section className="todo-panel" aria-label="To-Do:">
      <div className="todo-header">
        <h2>Todo:</h2>
        <span className="task-count" id="taskCounter">0 tasks</span>
      </div>
      <div className="todo-input-group">
        <input type="text" id="todoInput" />
        <button id="addTodoBtn">+</button>
      </div>
      <div className="todo-list-container">
        <div className="empty-todo">There's nothing</div>
      </div>
    </section>

    </main>
  );
}

export default App;
