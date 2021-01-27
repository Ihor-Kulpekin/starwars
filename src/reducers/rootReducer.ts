import { combineReducers } from 'redux';
import films from './filmsReducer';
import people from './peopleReducer';

export default combineReducers({
  films,
  people
})
