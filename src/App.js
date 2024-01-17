import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useCurrentUser } from "./contexts/CurrentUserContext";
import './Global.css';
import NavBar from './components/NavBar';
import Home from './components/LandingPageHero';
import AboutUs from './components/AboutUs';
import MeetingList from './components/MeetingList';
import Volunteer from './components/Volunteer';
import MeetingSearchPage from './components/MeetingSearchPage';
import SignupForm from './auth/SignUpForm';
import MeetingCreateForm from './components/MeetingCreateForm.js';
import MeetingDetails from './components/MeetingDetails.js';
import MeetingEditForm from './components/MeetingEditForm.js';
import ProfileDetails from './components/ProfileDetails.js';
import ProfileEditForm from './components/ProfileEditForm.js';

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
          <Route path="/auth/SignUpForm" element={<SignupForm />} />
          <Route exact path="/meetings/create" render={() => <MeetingCreateForm />} />
          <Route exact path="/meetings/:id" render={() => <MeetingDetails />} />
          <Route exact path="/meetings/:id/edit" render={() => <MeetingEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfileDetails />} />
          <Route exact path="/profiles/:id/edit" render={() => <ProfileEditForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
