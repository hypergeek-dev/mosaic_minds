import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./Global.css";
import NavBar from "./components/NavBar";
import Home from "./components/LandingPageHero";
import AboutUs from "./components/AboutUs";
import MeetingList from "./components/MeetingList";
import Volunteer from "./components/Volunteer";
import MeetingSearchPage from "./components/MeetingSearchPage";
import SignupForm from "./components/SignUpForm";

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
              break;
          }
      }
  }
  return cookieValue;
}

// Set the CSRF token for Axios POST requests
axios.defaults.headers.post['X-CSRFToken'] = getCookie('csrftoken');

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
        <Route path="/SignUpForm" element={<SignupForm />} />
      </Routes>
    </div>
  </Router>
);
}

export default App;