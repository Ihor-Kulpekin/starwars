import {all, put, call, takeLatest} from 'redux-saga/effects';
import api from '../helpers/sendsay'
import { authenticateSuccess, logout } from "../actions/actions";
import { ActionTypes } from "../constantns/constants";

export function* authenticateCheckSaga() {
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
  }
}

export function* authenticateSaga({payload}:any) {
  yield api.sendsay
    .login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    })
    .then(() => {
      document.cookie = `sendsay_session=${api.sendsay.session}`;
    })
    .catch((err:any) => {
      document.cookie = '';
      console.log('err', err);
    });

  yield put(
    authenticateSuccess({
      sessionKey: api.sendsay.session,
      login: payload.login,
      sublogin: payload.sublogin,
    })
  );
}

export function* logoutSaga() {
  yield put(logout());
  document.cookie = '';
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga),
    takeLatest(ActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(ActionTypes.LOGOUT, logoutSaga),
  ]);
}
