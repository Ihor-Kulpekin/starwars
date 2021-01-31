import { put, call } from 'redux-saga/effects';

import {getListData as apiGetListData} from 'api/api'

export default function* listsSaga({
  url,
  search,
  actionSuccess,
  actionFailure
}: {
  url: string;
  search?: string;
  actionSuccess: Function;
  actionFailure: Function;
}) {
  try {
    const data = yield call(apiGetListData, url, search);
    yield put(actionSuccess(data))
  }catch (e) {
    yield put(actionFailure())
  }
}
