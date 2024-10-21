// EditNameForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../redux/actions/action'; 

const EditNameForm = ({ currentUserName, onClose }) => {
  const [newUserName, setNewUserName] = useState(currentUserName);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ userName: newUserName }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(updateUsername(newUserName)); // Met à jour le store Redux
        onClose(); 
      } else {
        console.error(data.message); 
      }
    } catch (error) {
      console.error('Error updating username:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Username:
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Update</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default EditNameForm;
