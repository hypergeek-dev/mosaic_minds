import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { CurrentUserProvider } from './auth/AuthContext';
import './Global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProfileDataProvider } from './auth/UserProfileData';

const container = document.getElementById('root'); 
const root = createRoot(container); 


root.render(
  <Router>
    <CurrentUserProvider>
      <ProfileDataProvider>
        <App />
      </ProfileDataProvider>
    </CurrentUserProvider>
  </Router>
);


reportWebVitals();
