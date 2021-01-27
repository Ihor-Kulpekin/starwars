import { put, call } from 'redux-saga/effects';

import { getPeople as apiGetPeople } from '../api/api';
import { getPeopleFailure, getPeopleSuccess } from '../actions/actions';

export default function* peopleSaga({ search }: { search?: string }) {
  try {
    const people = yield call(apiGetPeople, search);
    yield put(getPeopleSuccess(people));
  } catch (e) {
    yield put(getPeopleFailure());
  }
}
