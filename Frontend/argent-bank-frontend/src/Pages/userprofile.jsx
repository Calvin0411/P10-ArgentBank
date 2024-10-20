// src/pages/UserProfile.jsx

import React from 'react';
import EditNameButton from '../components/EditNameButton'; // Assure-toi que le chemin d'importation est correct
import AccountSection from '../components/AccountSection';

const UserProfile = () => {
  const handleViewTransactions = () => {
    console.log('Viewing transactions...');
  };

  const handleEditName = () => {
    console.log('Editing name...');
    // Ici, tu peux ajouter la logique pour modifier le pseudo de l'utilisateur
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <EditNameButton onClick={handleEditName} />
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountSection 
        title="Argent Bank Checking (x8349)" 
        amount="$2,082.79" 
        description="Available Balance" 
        onViewTransactions={handleViewTransactions} 
      />
      <AccountSection 
        title="Argent Bank Savings (x6712)" 
        amount="$10,928.42" 
        description="Available Balance" 
        onViewTransactions={handleViewTransactions} 
      />
      <AccountSection 
        title="Argent Bank Credit Card (x8349)" 
        amount="$184.30" 
        description="Current Balance" 
        onViewTransactions={handleViewTransactions} 
      />
    </main>
  );
};

export default UserProfile;
