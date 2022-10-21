import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Art from "./pages/art";
import Contact from "./pages/contact";
import Fiction from "./pages/fiction";
import Home from "./pages/home";
import Inspiration from "./pages/inspiration";
import Tech from "./pages/tech";

function App() {
  // const [load, upadateLoad] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <Router>
       {/* <Preloader load={load} /> */}
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}> */}
      <div className="App" id="scroll">
        <Navbar />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/art" element={<Art />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
