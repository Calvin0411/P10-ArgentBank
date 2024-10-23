//  Gère les actions liées à l'authentification des utilisateurs, la connexion, la déconnexion et la récupération du profil utilisateur

export const loginSuccess = (user) => {
  // Stocke les informations de l'utilisateur dans le localStorage
  localStorage.setItem('user', JSON.stringify(user));

  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};


// Pour indiquer que la connexion a échoué
export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
};

// Gère la connexion
export const logout = () => {
  // Supprime les informations de l'utilisateur du localStorage
  localStorage.removeItem('user');
  localStorage.removeItem('token'); 

  return {
    type: 'LOGOUT',
  };
};

// Pour récupérer le profil de l'utilisateur
export const fetchUserProfile = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
     // Récupère les informations du profil de l'utilisateur
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({
        type: 'FETCH_USER_PROFILE_SUCCESS',
        payload: data.body,
      });
    } else {
      const errorData = await response.json();
      dispatch({
        type: 'FETCH_USER_PROFILE_FAILURE',
        payload: errorData.message,
      });
    }
  } catch (error) {
    dispatch({
      type: 'FETCH_USER_PROFILE_FAILURE',
      payload: error.message,
    });
  }
};