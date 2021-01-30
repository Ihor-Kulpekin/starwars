import { ActionTypes } from '../constantns/constants';
import { VehiclesStateType } from '../types/vehiclesTypes';

const initialState: VehiclesStateType = {
  vehicles: [],
  loading: false,
  error: false,
  count: 0,
  next: ''  ,
  previous: ''
};

export default function vehicles(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_VEHICLES:{
      return {
        ...state,
        loading: true,
        error: false
      }
    }
    case ActionTypes.GET_VEHICLES_SUCCESS:{
      const {vehicles, count, previous, next} = action;
      return {
        ...state,
        loading: false,
        vehicles: vehicles,
        error: false,
        count,
        previous,
        next
      }
    }
    case ActionTypes.GET_VEHICLES_FAILURE:{
      return {
        ...state,
        loading: false,
        error: true
      }
    }
    default:
      return {
        ...state
      }

  }
}
