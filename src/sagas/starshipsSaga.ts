import { put, call } from 'redux-saga/effects';

import { getStarships as apiGetStarships } from 'api/api';
import { getStarshipsFailure, getStarshipsSuccess } from 'actions/actions';

export default function* peopleSaga({ search }: { search?: string }) {
  try {
    const starships = yield call(apiGetStarships, search);
    yield put(getStarshipsSuccess(starships));
  } catch (e) {
    yield put(getStarshipsFailure());
  }
}
