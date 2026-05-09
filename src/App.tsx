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
        <a href="#">Focus</a>
        <a href="#">Insights</a>
      </div>
    </nav>
    </main>
  );
}

export default App;
