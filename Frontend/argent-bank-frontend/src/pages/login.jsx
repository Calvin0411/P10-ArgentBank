import React from 'react';

const SignIn = () => {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* Placeholder pour la navigation après la connexion */}
          <a href="./user.html" className="sign-in-button">Sign In</a>
          {/* Pour le vrai bouton de soumission, utiliser le code commenté ci-dessous */}
          {/* <button type="submit" className="sign-in-button">Sign In</button> */}
        </form>
      </section>
    </main>
  );
};

export default SignIn;
