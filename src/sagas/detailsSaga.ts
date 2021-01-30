import { put, call } from 'redux-saga/effects';

import { getDetails as apiGetDetails } from '../api/api';

export default function* detailsSaga({
  url,
  id,
  actionSuccess,
  actionFailure
}: {
  url: string;
  id: string;
  actionSuccess: Function;
  actionFailure: Function;
}) {
  try {
    const data = yield call(apiGetDetails, url, id);
    yield put(actionSuccess(data));
  } catch (e) {
    yield put(actionFailure());
  }
}
