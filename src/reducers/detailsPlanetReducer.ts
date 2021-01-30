import { ActionTypes } from '../constantns/constants';
import { PlanetDetailsStateType } from '../types/planetsTypes';

const initialState:PlanetDetailsStateType = {
  planet: null,
  loading: false,
  error: false
}

export default function planetDetails(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_PLANET_DETAILS:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.GET_PLANET_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        planet: action.character
      }
    case ActionTypes.GET_PLANET_DETAILS_FAILURE:
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
