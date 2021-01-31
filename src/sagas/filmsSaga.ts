import { put, call } from 'redux-saga/effects';

import { getFilms as apiGetFilms } from 'api/api';
import { getFilmsFailure, getFilmsSuccess } from 'actions/actions';

export default function* filmsSaga({ search }: { search?: string }) {
  try {
    const films = yield call(apiGetFilms, search);
    yield put(getFilmsSuccess(films));
  } catch (e) {
    yield put(getFilmsFailure());
  }
}
