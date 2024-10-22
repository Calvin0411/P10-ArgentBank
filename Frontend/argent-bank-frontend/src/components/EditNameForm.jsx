import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUsername } from '../redux/actions/action';

const EditNameForm = ({ currentUserName, onClose }) => {
  const [newUserName, setNewUserName] = useState(currentUserName);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setFirstName(storedUser.firstName);
      setLastName(storedUser.lastName);
    }
  }, []);

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
        const storedUser = JSON.parse(localStorage.getItem('user'));
        storedUser.userName = newUserName; // Met à jour le nom dans localStorage
        localStorage.setItem('user', JSON.stringify(storedUser));
        onClose();
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
