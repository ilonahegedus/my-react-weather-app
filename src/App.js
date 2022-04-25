import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1> Weather App</h1>
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Ilona Hegedus and is{" "}
          <a
            href="https://github.com/ilonahegedus/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHUb.
          </a>
        </footer>
      </div>
    </div>
  );
}
