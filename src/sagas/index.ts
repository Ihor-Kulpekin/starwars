import { all, debounce } from 'redux-saga/effects';
import filmsSaga from './filmsSaga';
import {ActionTypes}  from '../constantns/constants';
import peopleSaga from './peopleSaga';
import starshipsSaga from './starshipsSaga';
import planetsSaga from './planetsSaga';
import vehiclesSaga from './vehiclesSaga';

export default function* root() {
  yield all([
    // @ts-ignore
     debounce(500, ActionTypes.GET_FILMS, filmsSaga),
    // @ts-ignore
    debounce(500, ActionTypes.GET_PEOPLE, peopleSaga),
    // @ts-ignore
    debounce(500,ActionTypes.GET_STARSHIPS, starshipsSaga),
    // @ts-ignore
    debounce(500, ActionTypes.GET_PLANETS, planetsSaga),
    // @ts-ignore
    debounce(500, ActionTypes.GET_VEHICLES, vehiclesSaga)
  ]);
}
