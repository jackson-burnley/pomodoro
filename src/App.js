import React from "react";
import "./App.css";
import Timer from "./Timer";

function App() {
  return (
    <div className="App">
      <h1>Pomodoro App</h1>
      <div className="main">
        <Timer />
      </div>
    </div>
  );
}

export default App;
