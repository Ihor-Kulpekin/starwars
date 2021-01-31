import { put, call } from 'redux-saga/effects';

import { getVehicles as apiGetVehicles } from 'api/api';
import { getVehiclesSuccess, getVehiclesFailure } from 'actions/actions';

export default function* peopleSaga({ search }: { search?: string }) {
  try {
    const vehicles = yield call(apiGetVehicles, search);
    yield put(getVehiclesSuccess(vehicles));
  } catch (e) {
    yield put(getVehiclesFailure());
  }
}
