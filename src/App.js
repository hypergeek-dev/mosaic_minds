import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Global.css";
import NavBar from "./components/NavBar";
import Home from "./components/LandingPageHero";
import AboutUs from "./components/AboutUs";
import MeetingList from "./components/MeetingList";
import Volunteer from "./components/Volunteer";
import MeetingSearchPage from "./components/MeetingSearchPage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/MeetingList" element={<MeetingList />} />
          <Route path="/MeetingSearchPage" element={<MeetingSearchPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Volunteer" element={<Volunteer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;