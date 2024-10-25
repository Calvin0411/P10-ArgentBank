import React from 'react';
import logo from '../img/argentBankLogo.webp'; 
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions'; 
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const dispatch = useDispatch(); // Initialisation de dispatch pour envoyer des actions
  const navigate = useNavigate(); // Initialisation de useNavigate pour rediriger
  const user = useSelector((state) => state.auth.user); // Récupération de l'utilisateur depuis Redux

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    dispatch(logout()); // Déclenche l'action de déconnexion grâce à redux
    navigate('/'); // Redirige vers la page principale après la déconnexion
  };

  return (
    <header>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          {user ? (
            <>
              <a className="main-nav-item" href="/user">
                <i className="fa fa-user-circle"></i>
                   {user.userName || "User"}
                </a>

              <a className="main-nav-item" href="/" onClick={handleLogout}>
                <i className="fa fa-sign-out"></i>
                  Sign Out
              </a>

            </>
          ) : (
            <a className="main-nav-item" href="/sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;