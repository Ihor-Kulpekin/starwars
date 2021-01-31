import { call, put } from 'redux-saga/effects';
import { getDataForDetailsItem } from 'api/api';

export default function* additionalSaga({
  strings,
  actionSuccess,
  actionFailure
}: {
  strings: string[];
  actionSuccess: Function;
  actionFailure: Function;
}) {
  try {
    const data = yield call(getDataForDetailsItem, strings);
    yield put(actionSuccess(data))
  } catch (e) {
    yield put(actionFailure());
  }
}
