import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";
import NavBar from "./components/NavBar";
import Home from "./components/LandingPageHero";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;