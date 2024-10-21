export const loginSuccess = (user) => {
  // Stocke les informations de l'utilisateur dans le localStorage
  localStorage.setItem('user', JSON.stringify(user));
  console.log('User stored in localStorage:', user); // Log pour vérifier

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
  localStorage.removeItem('token'); 

  return {
    type: 'LOGOUT',
  };
};

export const fetchUserProfile = () => async (dispatch) => {
  const token = localStorage.getItem('token');

  try {
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

