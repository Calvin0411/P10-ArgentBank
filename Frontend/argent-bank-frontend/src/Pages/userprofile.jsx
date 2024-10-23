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

    //récupère les infos du local storage de l'utilisateur
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('User from localStorage:', user); // Log pour vérifier l'utilisateur
    console.log(localStorage.getItem('token')); // Log pour vérifier le tokken
    const userId = user ? user.id : null; // Vérifie si l'utilisateur existe
    if (userId) {
      dispatch(fetchUserProfile(userId)); // Appelle l'action pour récupérer le profil depuis redux
    } else {
      console.error('User ID is undefined'); // Log si l'ID est n'est pas là
    }
  }, [dispatch]);

  // Log pour voir les transactions
  const handleViewTransactions = () => {
    console.log('Viewing transactions...'); 
  };

  // Transition pour le mode édition
  const handleEditName = () => {
    setIsEditing(true);
  };

  const closeEditForm = () => {
    setIsEditing(false);
  };

  return (
    <main className="main bg-dark">
      {isEditing ? (
        <>
          <h2>Edit user info</h2>
          <EditNameForm currentUserName="User" onClose={closeEditForm} />
        </>
      ) : (
        <>
          <WelcomeUser /> 
          <EditNameButton onClick={handleEditName} /> 
        </>
      )}
      
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
