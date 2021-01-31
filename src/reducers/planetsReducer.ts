import { ActionTypes } from 'constantns/constants';
import { PlanetsStateType } from 'types/planetsTypes';

const initialState: PlanetsStateType = {
  planets: [],
  loading: false,
  error: false,
  count: 0,
  next: ''  ,
  previous: ''
};

export default function planets(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_PLANETS:{
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case ActionTypes.GET_PLANETS_SUCCESS:{
      const {planets, count, previous, next} = action;
      return {
        ...state,
        loading: false,
        planets: planets,
        error: false,
        count,
        previous,
        next
      }
    }
    case ActionTypes.GET_PLANETS_FAILURE:{
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
