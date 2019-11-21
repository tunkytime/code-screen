import React, { useState } from "react";
import Palindrome from "./components/Palindrome";
import ChuckNorris from "./components/ChuckNorris";
import Stats from "./components/Stats";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>Code Screen</h1>
      <Palindrome />
      <ChuckNorris />
      <Stats />
    </div>
  );
};

export default App;
