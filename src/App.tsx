import React from "react";
import "./App.css";
import CounterPage from "./pages/counter/CounterPage";
import { CounterStatusProvider } from "./contexts/counterPageContext/CounterStatusContext";

function App() {
  return (
    <div className="App">
      <CounterStatusProvider>
        <CounterPage />
      </CounterStatusProvider>
    </div>
  );
}

export default App;
