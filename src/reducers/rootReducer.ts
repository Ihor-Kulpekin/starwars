import { combineReducers } from 'redux';
import films from './filmsReducer';
import people from './peopleReducer';
import starships from './starshipsReducer';
import planets from './planetsReducer';
import vehicles from './vehiclesReducer';

export default combineReducers({
  films,
  people,
  starships,
  planets,
  vehicles
})
