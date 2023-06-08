import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CssTest from "./pages/CssTest";
import JavaScriptTest from "./pages/JavaScriptTest";

function App() {
  return (
    <div className="w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<CssTest />} />
        <Route path="/2" element={<JavaScriptTest />} />
        <Route path="/3" />
      </Routes>
    </div>
  );
}

export default App;
