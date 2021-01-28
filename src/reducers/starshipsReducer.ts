import { ActionTypes } from '../constantns/constants';
import { StarshipsStateType } from '../actions/types/starshipsTypes';

const initialState: StarshipsStateType = {
  starships: [],
  loading: false,
  error: false,
  count: 0,
  next: ''  ,
  previous: ''
};

export default function starships(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_STARSHIPS:{
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case ActionTypes.GET_STARSHIPS_SUCCESS:{
      const {starships, count, previous, next} = action;
      return {
        ...state,
        loading: false,
        starships: starships,
        error: false,
        count,
        previous,
        next
      }
    }
    case ActionTypes.GET_STARSHIPS_FAILURE:{
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    default:
      return state

  }
}
