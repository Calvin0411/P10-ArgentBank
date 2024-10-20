export const loginSuccess = (user) => {
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
    return {
      type: 'LOGOUT',
    };
  };
  
  // Actions asynchrones avec Thunk
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
  