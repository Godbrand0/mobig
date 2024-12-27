import React from "react";
import "../App.css";

export default function Dark({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}
