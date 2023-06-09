import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CssTest from "./pages/CssTest";
import JavaScriptTest from "./pages/JavaScriptTest";
import FrontEndTest from "./pages/FrontEndTest";

function App() {
  return (
    <div className="w-full">
      <Link to="/" className="">
        <button className="bg-gray-500 p-4 m-4 rounded-md">Homepage</button>
      </Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/1" element={<CssTest />} />
        <Route path="/2" element={<JavaScriptTest />} />
        <Route path="/3/:query" element={<FrontEndTest />} />
      </Routes>
    </div>
  );
}

export default App;
