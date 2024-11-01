import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditNameButton from '../components/EditNameButton'; 
import AccountSection from '../components/AccountSection';
import EditNameForm from '../components/EditNameForm'; 
import WelcomeUser from '../components/WelcomeUser'; 
import { fetchUserProfile } from '../redux/actions/authActions'; 

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Pour gérer la navigation
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    // Vérifie si l'utilisateur est authentifié
    if (!user || !token) {
      // Si non, redirige vers la page d'erreur
      navigate('/error'); // Assurez-vous d'avoir une route pour '/error'
      return;
    }

    console.log('User from localStorage:', user);
    const userId = user.id; // Récupère l'ID de l'utilisateur

    if (userId) {
      dispatch(fetchUserProfile(userId)); // Appelle l'action pour récupérer le profil depuis Redux
    } else {
      console.error('User ID is undefined');
      navigate('/error'); // Redirige vers la page d'erreur si l'ID est indéfini
    }
  }, [dispatch, navigate]);

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
        onViewTransactions={() => console.log('Viewing transactions...')} 
      />
      <AccountSection 
        title="Argent Bank Savings (x6712)" 
        amount="$10,928.42" 
        description="Available Balance" 
        onViewTransactions={() => console.log('Viewing transactions...')} 
      />
      <AccountSection 
        title="Argent Bank Credit Card (x8349)" 
        amount="$184.30" 
        description="Current Balance" 
        onViewTransactions={() => console.log('Viewing transactions...')} 
      />
    </main>
  );
};

export default UserProfile;
