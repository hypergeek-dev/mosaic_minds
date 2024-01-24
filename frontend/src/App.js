import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./api/AxiosDefaults";
import './Global.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import MeetingList from './components/MeetingList';
import Volunteer from './components/VolunteerForm';
import MeetingSearchForm from './components/MeetingSearchForm';
import MeetingSearchPage from './components/MeetingSearchPage';
import SignInForm from './auth/SignInForm';
import SignUpForm from './auth/SignUpForm';
import MeetingCreateForm from './components/MeetingCreateForm';
import MeetingDetails from './components/MeetingDetails';
import MeetingEditForm from './components/MeetingEditForm';
import ProfileDetails from './components/ProfileDetails'
import ProfileEditForm from './components/ProfileEditForm';
import UsernameForm from "./components/UsernameForm";
import UserPasswordForm from "./components/UserPasswordForm";
import NotFound from "./components/NotFound";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
  
        <Route exact path="/" component={Home} />
        <Route path="/signin" render={() => <SignInForm />} />
        <Route path="/signup" render={() => <SignUpForm />} />
        <Route path="/meeting-list" render={() => <MeetingList />} />
        <Route path="/meeting-search-form" render={() => <MeetingSearchForm />} />
        <Route path="/meeting-search-page" render={() => <MeetingSearchPage />} />
        <Route path="/about-us" render={() => <AboutUs />} />
        <Route path="/volunteer" render={() => <Volunteer />} />
        <Route path="/auth/sign-up-form" render={() => <SignUpForm />} />
        <Route path="/meetings/create" render={() => <MeetingCreateForm />} />
        <Route path="/meeting-details/:id" render={(props) => <MeetingDetails {...props} />} />
        <Route path="/meetings/:id/edit" render={(props) => <MeetingEditForm {...props} />} />
        <Route path="/profiles/:id" render={(props) => <ProfileDetails {...props} />} />
        <Route path="/profiles/:id/edit/username" render={(props) => <UsernameForm {...props} />} />
        <Route path="/profiles/:id/edit/password" render={(props) => <UserPasswordForm {...props} />} />
        <Route path="/profiles/:id/edit" render={(props) => <ProfileEditForm {...props} />} />

  <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;