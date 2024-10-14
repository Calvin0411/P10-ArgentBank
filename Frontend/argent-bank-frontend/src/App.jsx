import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header'; 
import Home from './pages/HomePage';
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
