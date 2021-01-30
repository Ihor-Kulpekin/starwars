import { combineReducers } from 'redux';
import films from './filmsReducer';
import people from './peopleReducer';
import starships from './starshipsReducer';
import planets from './planetsReducer';
import vehicles from './vehiclesReducer';
import filmDetails from './detailsFilmReducer';
import vehicleDetails from './vehicleDetailsReducer';
import characterDetails from './detailsCharacterReducer';
import planetDetails from './detailsPlanetReducer';
import starshipDetails from './detailsStarshipReducer';

export default combineReducers({
  films,
  people,
  starships,
  planets,
  vehicles,
  filmDetails,
  vehicleDetails,
  characterDetails,
  planetDetails,
  starshipDetails
})
