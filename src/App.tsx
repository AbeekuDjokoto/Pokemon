import React from "react";
import "./index.css";
import { Providers } from "./Providers";
import { Pokemon } from "./views/Pokemon/Pokemon";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ListView } from "./features";
import { Home } from "./views";

function App() {
  return (
    <Providers>
      <Router>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listView" element={<ListView />} />
          <Route path="/listView/:id" element={<ListView />} />
        </Routes>
      </Router>
    </Providers>
  );
}

export default App;
