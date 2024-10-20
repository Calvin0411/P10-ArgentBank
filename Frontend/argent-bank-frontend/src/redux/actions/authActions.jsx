export const loginSuccess = (user) => {
  // Stocke les informations de l'utilisateur dans le localStorage
  localStorage.setItem('user', JSON.stringify(user));

  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};

export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
};

export const logout = () => {
  // Supprime les informations de l'utilisateur du localStorage
  localStorage.removeItem('user');

  return {
    type: 'LOGOUT',
  };
};
