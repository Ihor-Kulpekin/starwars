import { ActionTypes } from '../constantns/constants';
import { StarshipDetailsStateType } from '../types/starshipsTypes';

const initialState:StarshipDetailsStateType = {
  starship: null,
  loading: false,
  error: false
}

export default function starshipDetails(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_STARSHIP_DETAILS:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.GET_STARSHIP_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        starship: action.starship
      }
    case ActionTypes.GET_STARSHIP_DETAILS_FAILURE:
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
