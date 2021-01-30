import { all, debounce, takeLatest, takeEvery } from 'redux-saga/effects';
import filmsSaga from './filmsSaga';
import { ActionTypes } from '../constantns/constants';
import peopleSaga from './peopleSaga';
import starshipsSaga from './starshipsSaga';
import planetsSaga from './planetsSaga';
import vehiclesSaga from './vehiclesSaga';
import detailsSaga from './detailsSaga';
import additionalDataSaga from './additionalDataSaga';

export default function* root() {
  yield all([
    // @ts-ignore
    debounce(500, ActionTypes.GET_FILMS, filmsSaga),
    // @ts-ignore
    debounce(500, ActionTypes.GET_PEOPLE, peopleSaga),
    // @ts-ignore
    debounce(500, ActionTypes.GET_STARSHIPS, starshipsSaga),
    // @ts-ignore
    debounce(500, ActionTypes.GET_PLANETS, planetsSaga),
    // @ts-ignore
    debounce(500, ActionTypes.GET_VEHICLES, vehiclesSaga),
    takeLatest(
      // @ts-ignore
      [
        ActionTypes.GET_DETAILS_FILM,
        ActionTypes.GET_CHARACTER_DETAILS,
        ActionTypes.GET_VEHICLE_DETAILS,
        ActionTypes.GET_PLANET_DETAILS,
        ActionTypes.GET_STARSHIP_DETAILS
      ],
      detailsSaga
    ),
    // @ts-ignore
    takeEvery(ActionTypes.GET_DATA_FOR_DETAILS_ITEM, additionalDataSaga)
  ]);
}
