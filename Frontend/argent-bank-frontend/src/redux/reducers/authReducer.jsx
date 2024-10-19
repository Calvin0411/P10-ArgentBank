// redux/reducers/authReducer.js
const initialState = {
    user: null,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          user: {
            id: action.payload.id,
            email: action.payload.email,
            firstName: action.payload.firstName, // Stocke le prénom
          },
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          user: null,
          error: action.payload, // Gère l'erreur si la connexion échoue
        };
      case 'LOGOUT':
        return initialState; // Réinitialise l'état au logout
      default:
        return state;
    }
  };
  
  export default authReducer;
  