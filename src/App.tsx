import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SocialsFooter from "./components/SocialsFooter";
import Art from "./pages/art";
import Fiction from "./pages/fiction";
import Home from "./pages/home";
import Inspiration from "./pages/inspiration";
import Tech from "./pages/tech";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen" id="scroll">
        <Navbar />
        <div className="flex-grow pb-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tech" element={<Tech />} />
            <Route path="/fiction" element={<Fiction />} />
            <Route path="/art" element={<Art />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <SocialsFooter />
      </div>
    </Router>
  );
}

export default App;
