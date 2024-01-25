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
import ProfileDetails from './components/ProfileDetails';
import ProfileEditForm from './components/ProfileEditForm';
import UsernameForm from "./components/UsernameForm";
import UserPasswordForm from "./components/UserPasswordForm";
import FavouriteMeetings from './components/Favourites';
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignInForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/meeting-list" component={MeetingList} />
          <Route path="/meeting-search-form" component={MeetingSearchForm} />
          <Route path="/meeting-search-page" component={MeetingSearchPage} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/volunteer" component={Volunteer} />
          <Route path="/auth/sign-up-form" component={SignUpForm} />
          <Route path="/meetings/create" component={MeetingCreateForm} />
          <Route exact path="/meetings/:id" component={MeetingDetails} />
          <Route exact path="/meetings/:id/edit" component={MeetingEditForm} />
          <Route exact path="/profiles/:id" component={ProfileDetails} />
          <Route exact path="/profiles/:id/edit" component={ProfileEditForm} />
          <Route path="/profiles/:id/edit/username" component={UsernameForm} />
          <Route path="/profiles/:id/edit/password" component={UserPasswordForm} />
          <Route path="/favourite-meetings" component={FavouriteMeetings} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
