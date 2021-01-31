import { all, debounce, takeEvery, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from '../constantns/constants';
import detailsSaga from './detailsSaga';
import additionalDataSaga from './additionalDataSaga';
import listsSaga from './listsSaga';

export default function* root() {
  yield all([
    // @ts-ignore
    debounce(500, [
      ActionTypes.GET_FILMS,
      ActionTypes.GET_PLANETS,
      ActionTypes.GET_STARSHIPS,
      ActionTypes.GET_VEHICLES,
      ActionTypes.GET_PEOPLE
    ], listsSaga),
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
