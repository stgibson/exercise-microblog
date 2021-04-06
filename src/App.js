import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import "./App.css";

/**
 * Main component for app
 * @returns JSX code for rendering app
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
