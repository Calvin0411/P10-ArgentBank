import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess, loginFailure } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const SignIn = () => { 
  //déclaration des states pour stocker les valeurs email et mot de passe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // déclartation d'un state pour message d'erreur
  const [errorMessage, setErrorMessage] = useState('');
  //dispatch les actions vers Redux
  const dispatch = useDispatch();
  //navigation vers les pages
  const navigate = useNavigate();


// Fonction qui gère la soumission du formulaire de connexion
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('log in with:', { email, password }); //console log pour afficher info utilisateurs

  // Applelle l'API pour la connexion des utilisateurs
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const user = await response.json();
        console.log('Login response:', user);
        // Stocke le token dans le localStorage
        localStorage.setItem('token', user.body.token);
        // Dispatch loginSuccess pour stocker les infos d'utilisateurs dans Redux
        dispatch(loginSuccess({
          id: user.body.id,
          email: user.body.email,
          firstName: user.body.firstName || 'User',
          lastName: user.body.lastName || '',
          userName: user.body.userName || 'User',
        }));
        setErrorMessage('')
        navigate('/user');

    // En cas d'erreur  
    } else {
      const errorData = await response.json();
      dispatch(loginFailure(errorData.message));
      setErrorMessage('Erreur : Username or password incorrect'); // Affiche le message d'erreur
    }
  } catch (error) {
    dispatch(loginFailure(error.message));
    setErrorMessage('Erreur : An error as occured'); // Gestion des erreurs générales
  }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit" className="sign-in-button">Sign In</button>
        </form>
      </section>
    </main>
  );
};

export default SignIn;
