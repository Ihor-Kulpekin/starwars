import { createSelector } from 'reselect';
import { RootState } from '../store/store';

export const getFilmsSelector = createSelector(
  (state: RootState) => state.films,
  (films) => films
);

export const getPeopleSelector = createSelector(
  (state: RootState) => state.people,
  (people) => people
);

export const getStarshipsSelector = createSelector(
  (state: RootState) => state.starships,
  (starships) => starships
);

export const getPlanetsSelector = createSelector(
  (state: RootState) => state.planets,
  (planets) => planets
);

export const getPlanetsVehicle = createSelector(
  (state: RootState) => state.vehicles,
  (vehicles) => vehicles
);

export const getFilmDetailsSelector = createSelector(
  (state: RootState) => state.filmDetails,
  (filmDetails) => filmDetails
);

export const getCharacterDetailsSelector = createSelector(
  (state: RootState) => state.characterDetails,
  (characterDetails) => characterDetails
)

export const getStarshipDetailsSelector = createSelector(
  (state: RootState) => state.starshipDetails,
  (starshipDetails) => starshipDetails
)

export const getPlanetDetailsSelector = createSelector(
  (state: RootState) => state.planetDetails,
  (planetDetails) => planetDetails
)

export const getVehicleDetailsSelector = createSelector(
  (state: RootState) => state.vehicleDetails,
  (vehicleDetails) => vehicleDetails
)



