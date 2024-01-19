import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import "./api/AxiosDefaults.js";
import './Global.css';
import NavBar from './components/NavBar';
import Home from './components/LandingPageHero';
import AboutUs from './components/AboutUs';
import MeetingList from './components/MeetingList';
import Volunteer from './components/Volunteer';
import MeetingSearchPage from './components/MeetingSearchPage';
import SignupForm from './auth/SignUpForm';
import { useCurrentUser } from "./auth/AuthContext";
import MeetingCreateForm from './components/MeetingCreateForm';
import MeetingDetails from './components/MeetingDetails';
import MeetingEditForm from './components/MeetingEditForm';
import ProfileDetails from './components/ProfileDetails';
import ProfileEditForm from './components/ProfileEditForm';
import UsernameForm from "./components/UsernameForm";
import UserPasswordForm from "./components/UserPasswordForm";
import NotFound from "./components/NotFound.js"

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
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
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />

          <Route render={() => <NotFound />} />
         </Routes>
        </div>
      </Router>
    )
};

export default App;