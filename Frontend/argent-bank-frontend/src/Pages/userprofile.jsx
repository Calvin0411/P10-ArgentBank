// UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import EditNameButton from '../components/EditNameButton'; 
import AccountSection from '../components/AccountSection';
import EditNameForm from '../components/EditNameForm'; 
import WelcomeUser from '../components/WelcomeUser'; 
import { fetchUserProfile } from '../redux/actions/authActions'; 

const UserProfile = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User from localStorage:', user); // Log pour vérifier l'utilisateur
    const userId = user ? user.id : null; // Vérifie si l'utilisateur existe
    if (userId) {
      dispatch(fetchUserProfile(userId)); // Appelle l'action pour récupérer le profil
    } else {
      console.error('User ID is undefined'); // Log si l'ID est undefined
    }
  }, [dispatch]);

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
