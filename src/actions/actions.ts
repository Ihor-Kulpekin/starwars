import { ActionTypes } from '../constantns/constants';
import { FilmsTypes } from '../types/filmsTypes';
import { PlanetsTypes } from '../types/planetsTypes';
import { VehiclesTypes } from '../types/vehiclesTypes';

export const getFilms = (search: string) => ({
  type: ActionTypes.GET_FILMS,
  search
});

export const getFilmsSuccess = ({
  results,
  count,
  next,
  previous
}: {
  results: FilmsTypes[];
  count: number;
  next: string;
  previous: string;
}) => {
  return {
    type: ActionTypes.GET_FILMS_SUCCESS,
    films: results,
    count,
    next,
    previous
  };
};

export const getFilmsFailure = () => ({
  type: ActionTypes.GET_FILMS_FAILURE
});

export const getDetailsFilm = (
  url: string,
  id: string,
  actionSuccess: Function,
  actionFailure: Function
) => ({
  type: ActionTypes.GET_DETAILS_FILM,
  url,
  id,
  actionSuccess,
  actionFailure
});

export const getDetailsFilmSuccess = (film: FilmsTypes) => ({
  type: ActionTypes.GET_DETAILS_FILM_SUCCESS,
  film
});

export const getDetailsFilmFailure = () => ({
  type: ActionTypes.GET_DETAILS_FILM_FAILURE
});

export const getPeople = (search: string) => ({
  type: ActionTypes.GET_PEOPLE,
  search
});

export const getPeopleSuccess = ({
  results,
  count,
  next,
  previous
}: {
  results: FilmsTypes[];
  count: number;
  next: string;
  previous: string;
}) => ({
  type: ActionTypes.GET_PEOPLE_SUCCESS,
  people: results,
  count,
  next,
  previous
});

export const getPeopleFailure = () => ({
  type: ActionTypes.GET_PEOPLE_FAILURE
});

export const getStarships = (search: string) => ({
  type: ActionTypes.GET_STARSHIPS,
  search
});

export const getStarshipsSuccess = ({
  results,
  count,
  next,
  previous
}: {
  results: FilmsTypes[];
  count: number;
  next: string;
  previous: string;
}) => ({
  type: ActionTypes.GET_STARSHIPS_SUCCESS,
  starships: results,
  count,
  next,
  previous
});

export const getStarshipsFailure = () => ({
  type: ActionTypes.GET_STARSHIPS_FAILURE
});

export const getPlanets = (search?: string) => ({
  type: ActionTypes.GET_PLANETS,
  search
});

export const getPlanetsSuccess = ({
  results,
  count,
  next,
  previous
}: {
  results: PlanetsTypes[];
  count: number;
  next: string;
  previous: string;
}) => ({
  type: ActionTypes.GET_PLANETS_SUCCESS,
  planets: results,
  count,
  next,
  previous
});

export const getPlanetsFailure = () => ({
  type: ActionTypes.GET_PLANETS_FAILURE
});

export const getVihicles = (search?: string) => ({
  type: ActionTypes.GET_VEHICLES,
  search
});

export const getVehiclesSuccess = ({
  results,
  count,
  next,
  previous
}: {
  results: VehiclesTypes[];
  count: number;
  next: string;
  previous: string;
}) => ({
  type: ActionTypes.GET_VEHICLES_SUCCESS,
  vehicles: results,
  count,
  next,
  previous
});

export const getVehiclesFailure = () => ({
  type: ActionTypes.GET_VEHICLES_FAILURE
});
