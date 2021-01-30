import { ActionTypes } from '../constantns/constants';
import { CharacterDetailsStateType } from '../types/peopleTypes';

const initialState:CharacterDetailsStateType = {
  character: null,
  loading: false,
  error: false
}

export default function characterDetails(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_CHARACTER_DETAILS:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.GET_CHARACTER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        character: action.character
      }
    case ActionTypes.GET_CHARACTER_DETAILS_FAILURE:
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
