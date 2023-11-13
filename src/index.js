import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import data from "./components/Heroes/HeroesData.json";

import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import Heroes from "./components/Heroes/Heroes";
import HeroProfile from "./components/Heroes/HeroProfile";
import GameModes from "./components/GameModes/GameModes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Heroes" element={<Heroes />} />
        <Route path="/hero/:heroTag" element={<HeroProfile data={data} />} />
        <Route path="/Game_Modes" element={<GameModes />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
