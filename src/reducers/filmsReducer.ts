import { ActionTypes } from '../constantns/constants';
import { FilmsStateType } from '../actions/types/filmsTypes';

const initialState: FilmsStateType = {
  films: [],
  loading: false,
  error: false,
  count: 0,
  next: ''  ,
  previous: ''
};

export default function films(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_FILMS:{
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case ActionTypes.GET_FILMS_SUCCESS:{
      const {films, count, previous, next} = action;
      console.log('films', films)
      return {
        ...state,
        loading: false,
        films: films,
        error: false,
        count,
        previous,
        next
      }
    }
    case ActionTypes.GET_FILMS_FAILURE:{
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
