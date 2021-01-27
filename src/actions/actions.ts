import { ActionTypes } from '../constantns/constants';
import { FilmsTypes } from './types/filmsTypes';

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
  type: typeof ActionTypes.GET_FILMS_FAILURE
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
