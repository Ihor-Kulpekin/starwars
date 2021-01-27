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
  }
};

export const getFilmsFailure = () => ({
  type: typeof ActionTypes.GET_FILMS_FAILURE
});
