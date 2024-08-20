import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homeofmedium from './main';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { Google } from './dummy';
import { EmailPage } from './App';
import PrimarySearchAppBar from './nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="286184197739-22d7vh2a4vvectj34baec2gnn1pas58s.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<Homeofmedium/>} />
          <Route path="/main" element={<Google />} />
          <Route path="/email" element={<EmailPage />} />
          <Route path="/loggedin" element={<PrimarySearchAppBar/>} />
          
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
