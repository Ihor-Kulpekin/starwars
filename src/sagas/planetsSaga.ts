import { put, call } from 'redux-saga/effects';

import { getPlanets as apiGetPlanets } from '../api/api';
import { getPlanetsSuccess, getPlanetsFailure } from '../actions/actions';

export default function* peopleSaga({ search }: { search?: string }) {
  try {
    const people = yield call(apiGetPlanets, search);
    yield put(getPlanetsSuccess(people));
  } catch (e) {
    yield put(getPlanetsFailure());
  }
}
