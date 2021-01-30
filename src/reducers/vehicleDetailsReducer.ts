import { ActionTypes } from '../constantns/constants';
import { VehicleDetailsStateType } from '../types/vehiclesTypes';

const initialState:VehicleDetailsStateType = {
  vehicle: null,
  loading: false,
  error: false
}

export default function vehicleDetails(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.GET_VEHICLE_DETAILS:
      return {
        ...state,
        loading: true
      }
    case ActionTypes.GET_VEHICLE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        vehicle: action.vehicle
      }
    case ActionTypes.GET_VEHICLE_DETAILS_FAILURE:
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
