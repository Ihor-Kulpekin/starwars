import {all, fork} from 'redux-saga/effects';

import login from '../sagas/auth';

export default function* root() {
  yield all([fork(login)]);
}
