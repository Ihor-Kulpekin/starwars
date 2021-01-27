import { all, debounce } from 'redux-saga/effects';
import filmsSaga from './filmsSaga';
import {ActionTypes}  from '../constantns/constants';

export default function* root() {
  yield all([
    // @ts-ignore
     debounce(500, ActionTypes.GET_FILMS, filmsSaga)
  ]);
}
