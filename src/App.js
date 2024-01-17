import React, { useState, useEffect, createContext, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./Global.css";
import NavBar from "./components/NavBar";
import Home from "./components/LandingPageHero";
import AboutUs from "./components/AboutUs";
import MeetingList from "./components/MeetingList";
import Volunteer from "./components/Volunteer";
import MeetingSearchPage from "./components/MeetingSearchPage";
import SignupForm from "./auth/SignUpForm";
import EventForm from './components/AddMeeting';

// Axios interceptor for setting the Authorization header
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('mosaicminds');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export const CurrentUserContext = createContext();

function Main() {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  const handleMount = useCallback(async () => {
    try {
      const token = localStorage.getItem('mosaicminds');
      if (token) {
        const { data } = await axios.get('/users/current/', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setCurrentUser(data);
      } else {
        navigate('/users/login');
      }
    } catch (err) {
      console.error(err);
      setError(err.message);
      navigate('/users/login');
    }
  }, [navigate]); 

  
  useEffect(() => {
    handleMount();
  }, [handleMount]); 

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <NavBar />
        {error && <div className="error-message">{error}</div>}
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MeetingList" element={<MeetingList />} />
          <Route path="/MeetingSearchPage" element={<MeetingSearchPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/auth/SignUpForm" element={<SignupForm />} />
          <Route path="/AddMeeting" element={<EventForm />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
