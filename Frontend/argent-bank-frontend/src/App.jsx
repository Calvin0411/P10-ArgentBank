import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; 
import Home from './pages/HomePage';
import SignIn from './pages/login';
import UserProfile from './pages/userprofile';
import Footer from './components/footer';
import ErrorPage from './pages/ErrorPage';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
