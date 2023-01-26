import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";
import Counter from "./components/counter";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
