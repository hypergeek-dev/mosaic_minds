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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/MeetingList" component={MeetingList} />
          <Route path="/MeetingSearchPage" component={MeetingSearchPage} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/Volunteer" component={Volunteer} />
          <Route path="/auth/SignUpForm" component={SignupForm} />
          <Route path="/meetings/create" component={MeetingCreateForm} />
          <Route path="/meetings/:id" component={MeetingDetails} />
          <Route path="/meetings/:id/edit" component={MeetingEditForm} />
          <Route path="/profiles/:id" component={ProfileDetails} />
          <Route path="/profiles/:id/edit" component={ProfileEditForm} />
          <Route path="/profiles/:id/edit/username" component={UsernameForm} />
          <Route path="/profiles/:id/edit/password" component={UserPasswordForm} />
          <Route path="/profiles/:id/edit" component={ProfileEditForm} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
