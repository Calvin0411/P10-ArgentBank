import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; 
import Home from './pages/HomePage';
import SignIn from './pages/login'
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
