// UserProfile.jsx
import React, { useState } from 'react';
import EditNameButton from '../components/EditNameButton'; 
import AccountSection from '../components/AccountSection';
import EditNameForm from '../components/EditNameForm'; 
import WelcomeUser from '../components/WelcomeUser'; 
import { updateUsername } from '../redux/actions/action';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleViewTransactions = () => {
    console.log('Viewing transactions...'); 
  };

  const handleEditName = () => {
    setIsEditing(true); 
  };

  const closeEditForm = () => {
    setIsEditing(false); 
  };

  return (
    <main className="main bg-dark">
      <WelcomeUser /> 
      <EditNameButton onClick={handleEditName} />
      {isEditing && <EditNameForm currentUserName="User" onClose={closeEditForm} />} 
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
