import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./nav-bar/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <hr className="horizontal-line" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
