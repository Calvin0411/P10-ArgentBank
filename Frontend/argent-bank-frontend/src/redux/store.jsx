import { configureStore } from '@reduxjs/toolkit'; // Import de la fonction configureStore 
import { combineReducers } from 'redux';// Import de la fonction combineReducers
import authReducer from './reducers/authReducer'; // Importation du reducer d'authentification

const rootReducer = combineReducers({
  auth: authReducer, // Reducer pour gérer le state d'authentification
});

// création du store Redux
const store = configureStore({
  reducer: rootReducer,
});

export default store;