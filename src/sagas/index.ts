import { all, debounce } from 'redux-saga/effects';
import filmsSaga from './filmsSaga';
import {ActionTypes}  from '../constantns/constants';
import peopleSaga from './peopleSaga';

export default function* root() {
  yield all([
    // @ts-ignore
     debounce(500, ActionTypes.GET_FILMS, filmsSaga),
    // @ts-ignore
    debounce(500, ActionTypes.GET_PEOPLE, peopleSaga)
  ]);
}
