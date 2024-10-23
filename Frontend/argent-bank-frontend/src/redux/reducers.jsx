import { combineReducers } from 'redux';


// Reducer pour gérer le state de l'utilisateur
const userReducer = (state = {}, action) => {
  switch (action.type) {
    // Action pour définir les informations de l'utilisateur
    case 'SET_USER':
      // Mise à jour du state en ajoutant l'utilisateur au state
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
