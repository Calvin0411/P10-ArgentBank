import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../redux/actions/action';

const EditNameForm = ({ currentUserName, onClose }) => {
  const [newUserName, setNewUserName] = useState(currentUserName); // Stocke le nouveau username
  const [firstName, setFirstName] = useState(''); // Stocke le FirstName récupéré
  const [lastName, setLastName] = useState(''); // Stocke le Last Name récupéré
  const dispatch = useDispatch(); // Utilise Redux pour dispatcher des actions

  // Utilisation de useEffect pour récupération de First et last Name
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')); // Récupère les informations de l'utilisateur du localStorage
    if (storedUser) { //définit les infos d'utilisateur dans le local storage
      setFirstName(storedUser.firstName);
      setLastName(storedUser.lastName);
      setNewUserName(storedUser.userName);
    }
  }, []);

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       // Effectue une requête PUT pour mettre à jour le username
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ userName: newUserName }), // Envoie le nouveau username
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(updateUsername(newUserName)); // Met à jour le store Redux avec le nouveau nom d'utilisateur
        const storedUser = JSON.parse(localStorage.getItem('user'));
        storedUser.userName = newUserName; // Met à jour le nom d'utilisateur dans le localStorage
        localStorage.setItem('user', JSON.stringify(storedUser));
        onClose(); 

      // gestion des erreurs
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error updating username:', error);
    }
  };

  return (
    <form className="edit-user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} disabled />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} disabled />
      </div>
      
      <div className="form-buttons">
        <button type="submit" className="btn-save">Save</button>
        <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
      </div>
    </form>
  );
};

export default EditNameForm;
