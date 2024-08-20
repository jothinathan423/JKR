/* global gapi */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './login';

function EmailPage() {
  const location = useLocation();
  const email = location.state?.email || 'No email found';

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p>{email}</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CenteredLogin />} />
        <Route path="/email" element={<EmailPage />} />
      </Routes>
    </Router>
  );
}

// Centered Login component
function CenteredLogin() {
  return (
    <div style={styles.container}>
      <Login />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0' // Optional background color
  }
};

export default App;
