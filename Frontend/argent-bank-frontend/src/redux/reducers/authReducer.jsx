const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null, 
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_PROFILE_SUCCESS':
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case 'FETCH_USER_PROFILE_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          firstName: action.payload.firstName || 'User',
          userName: action.payload.userName || '', 
        },
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case 'LOGOUT':
      return initialState;
    case 'UPDATE_USERNAME':
      return {
        ...state,
        user: {
          ...state.user,
          userName: action.payload,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
