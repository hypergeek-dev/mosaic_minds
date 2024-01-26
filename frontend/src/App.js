import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./api/AxiosDefaults";
import './Global.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MeetingList from './pages/MeetingList';
import Volunteer from './pages/VolunteerForm';
import MeetingSearchForm from './components/MeetingSearchForm';
import MeetingSearchPage from './pages/MeetingSearchPage';
import SignInForm from './auth/SignInForm';
import SignUpForm from './auth/SignUpForm';
import MeetingCreateForm from './pages/MeetingCreateForm';
import MeetingDetails from './components/MeetingDetails';
import MeetingEditForm from './components/MeetingEditForm';
import ProfileDetails from './components/ProfileDetails';
import ProfileEditForm from './components/ProfileEditForm';
import UserNameForm from "./components/UserNameForm";
import UserPasswordForm from "./components/UserPasswordForm";
import NotFound from "./pages/NotFound";

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
          <Route path="/profiles/:id/edit/username" component={UserNameForm} />
          <Route path="/profiles/:id/edit/password" component={UserPasswordForm} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
