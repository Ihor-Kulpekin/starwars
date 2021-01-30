import { FilmDetailsStateType } from '../types/filmsTypes';
import { ActionTypes } from '../constantns/constants';

const initialState:FilmDetailsStateType = {
  film: null,
  loading: false,
  error: false
}

export default function filmDetails(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_DETAILS_FILM:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.GET_DETAILS_FILM_SUCCESS:
      debugger
      return {
        ...state,
        loading: false,
        error: false,
        film: action.film
      }
    case ActionTypes.GET_DETAILS_FILM_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return {
        ...state
      }
  }
}
