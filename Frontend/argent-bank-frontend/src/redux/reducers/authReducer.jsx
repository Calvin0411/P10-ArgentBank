const initialState = {
  // État initial avec les données de l'utilisateur récupérées du localStorage
  user: JSON.parse(localStorage.getItem('user')) || null,
  error: null,
};

// Reducer pour gérer les actions liées à l'authentification
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_PROFILE_SUCCESS':
      return {
        ...state,
        user: action.payload, // Met à jour l'utilisateur avec les nouvelles données
        error: null,
      };
    case 'FETCH_USER_PROFILE_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    case 'LOGIN_SUCCESS': // Met à jour l'état avec les informations de l'utilisateur après une connexion réussie
      return {
        ...state,
        user: {
          id: action.payload.id,
          email: action.payload.email,
          firstName: action.payload.firstName || 'User',
          lastName: action.payload.lastName || '',
          userName: action.payload.userName || 'User',
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
      localStorage.removeItem('user'); // Supprime les informations de l'utilisateur du localStorage
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
