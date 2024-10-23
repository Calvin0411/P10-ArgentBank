//Gère les actions mise à jour du username et la récupération des informations de profil de l'utilisateur

// Pour indiquer que la connexion a réussi
export const loginSuccess = (user) => {
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
  
  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };
  
// Action pour mettre à jour le nom d'utilisateur
export const updateUsername = (userName) => {
  return {
    type: 'UPDATE_USERNAME',
    payload: userName,
  };
};

  // Actions asynchrones avec Thunk et récupération du profil utilisateur
  export const fetchUserProfile = (userId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/api/v1/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const data = await response.json();
        dispatch({
          type: 'FETCH_USER_PROFILE_SUCCESS',
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: 'FETCH_USER_PROFILE_FAILURE',
          payload: error.message,
        });
      }
    };
  };
  