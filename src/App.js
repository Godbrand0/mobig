import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

import Nav from "./components/Nav";
import Posts from "./components/Posts";
import Story from "./components/Story";
import Dark from "./Reuse/Dark";
import NavBar from "./components/NavBar";
import Follow from "./components/Follow";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme; // Set the body class to the current theme
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`body ${theme}`}>
      <div className="App">
        <NavBar theme={theme} />
        <Dark theme={theme} toggleTheme={toggleTheme} />
        <Nav theme={theme} />
        <div className="mid">
          <div className="center">
            <Story theme={theme} />
            <Posts theme={theme} />
          </div>

          <Follow />
        </div>

        <Footer theme={theme} />
      </div>
    </div>
  );
}

export default App;
