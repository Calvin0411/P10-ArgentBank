// src/components/WelcomeUser.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const WelcomeUser = () => {
  const user = useSelector((state) => state.auth.user); 

  return (
    <div className="welcome">
      <h1>Welcome back, {user?.userName || user?.firstName || 'User'}!</h1>
    </div>
  );
};

export default WelcomeUser;
