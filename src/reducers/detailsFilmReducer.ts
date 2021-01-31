import { FilmDetailsStateType } from 'types/filmsTypes';
import { ActionTypes } from 'constantns/constants';

const initialState:FilmDetailsStateType = {
  film: null,
  loading: false,
  error: false,
  characters: []
}

export default function filmDetails(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_DETAILS_FILM:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.GET_DETAILS_FILM_SUCCESS:
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
    case ActionTypes.GET_DATA_FOR_DETAILS_ITEM:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.GET_DATA_FOR_DETAILS_ITEM_SUCCESS:
      return {
        ...state,
        characters: action.items,
        loading: false,
        error:false
      }
    case ActionTypes.GET_DATA_FOR_DETAILS_ITEM_FAILURE:
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
